import { Book } from "../models/Book.js";
import { db } from "../config/dbConfig.js";
import { unlink } from "fs";
import { log } from "console";
export const createBook = async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Type of:", typeof req.body.genres);
  console.log("Request File:", req.file);
  try {
    const {
      ISBN,
      title,
      desc,
      authorName,
      publisher,
      publishDate,
      coverType,
      noPages,
      language,
      genres,
    } = req.body;
    if (!ISBN || !title || !desc) {
      return res.status(400).send({ message: "Pls send all required fields!" });
    }

    const genresArray = Array.isArray(genres) ? genres : [genres];
    console.log("Genres:", genresArray);

    const coverlink = "http://localhost:3001/books/covers/" + req.file.filename;

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
      language,
      genresArray,
      coverlink
    );

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
    SELECT ISBN, title, coverLink, \`authorName\`, \`desc\`, publisher, publishDate, coverType, noPages, \`language\` , dateAdded 
FROM ((book natural join author_write_book) join author on author_write_book.authorID=author.authorID) ORDER BY dateAdded DESC;`;
    const data = await db.execute(sql);
    return res.json(data[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const deleteOldCoverFile = async (isbn) => {
  const [oldLink, _] = await db.execute(
    `SELECT coverLink FROM book WHERE ISBN=?`,
    [isbn]
  );
  const fileName = oldLink[0]["coverLink"].slice(35);
  const filePath = "./public/uploads/" + fileName;
  unlink(filePath, (err) => {
    if (err) {
      console.error(`Error deleting file ${filePath}:`, err);
    }
  });
  return true;
};

export const updateBookByISBN = async (req, res) => {
  try {
    const {
      ISBN,
      title,
      desc,
      authorName,
      publisher,
      publishDate,
      coverType,
      noPages,
      language,
      genres,
    } = req.body;

    if (!ISBN || !title || !desc) {
      return res.status(400).send({ message: "Pls send all required fields!" });
    }
    const coverlink = "http://localhost:3001/books/covers/" + req.file.filename;
    await deleteOldCoverFile(ISBN);
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
      language,
      genres,
      coverlink
    );
    book = await book.update();

    console.log("Update book");

    return res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const DeleteBookByISBN = async (req, res) => {
  try {
    const { isbn } = req.params;
    if (!isbn) {
      return res
        .status(400)
        .send({ message: "ISBN is required for deleting a book." });
    }
    await Book.deleteOne(isbn);
    console.log("Delete book");
    await deleteOldCoverFile(isbn);
    return res.status(200).send({ message: "Delete success" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const GetBookGenres = async (req, res) => {
  try {
    const { isbn } = req.params;
    if (!isbn) {
      return res
        .status(400)
        .send({ message: "ISBN is required for getting genres of book." });
    }
    const genres = await Book.getGenres(isbn);
    console.log("Get genres of book");
    return res.status(200).send(genres);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
