import { Book } from "../models/Book.js";
import { db } from "../config/dbConfig.js";

export const createBook = async (req, res) => {
  try {
    const {
      ISBN,
      title,
      image,
      desc,
      authorName,
      publisher,
      publishDate,
      coverType,
      noPages,
      language,
    } = req.body;
    if (!ISBN || !title || !desc) {
      return res.status(400).send({ message: "Pls send all required fields!" });
    }

    const coverlink = image ? `uploads/${image.name}` : null;
    let book = new Book(
      ISBN,
      title,
      coverlink,
      desc,
      authorName,
      publisher,
      publishDate,
      coverType,
      noPages,
      language
    );
    book = await book.save();


    if (image) {
      image.mv(`public/uploads/${image.name}`, (err) => {
        if (err) {
          console.error('Error saving image:', err);
        }
      });
    }

    console.log("Create new book");
    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getAllBook = async (req, res) => {
  try {
    let sql = `
    SELECT ISBN, title, \`authorName\`, \`desc\`, publisher, publishDate, coverType, noPages, \`language\` 
FROM (((book natural join edition) natural join author_write_book) join author on author_write_book.authorID=author.authorID);`;
    const data = await db.execute(sql);
    return res.json(data[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
