import { Book } from "../models/Book.js";
import { db } from "../config/dbConfig.js";

export const createBook = async (req, res) => {
  try {
    const { ISBN, title, description } = req.body;
    if (!ISBN || !title || !description) {
      return res.status(400).send({ message: "Pls send all required fields!" });
    }
    let book = new Book(ISBN, title, description);
    book = await book.save();
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
    SELECT ISBN, title, \`desc\`, publisher, publishDate, coverType, noPages, \`language\`, \`name\` 
FROM (((book natural join edition) natural join author_write_book) join author on author_write_book.authorID=author.id);`;
    const data = await db.execute(sql);
    return res.json(data[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
