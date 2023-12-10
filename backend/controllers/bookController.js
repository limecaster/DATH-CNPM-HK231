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
      genresArray
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
    SELECT ISBN, title, coverLink, \`authorName\`, \`desc\`, publisher, publishDate, coverType, noPages, \`language\` , DATE_FORMAT(dateAdded, "%Y-%m-%d %H:%i:%s") AS dateAdded, copyNumber 
FROM ((book natural join author_write_book) join author on author_write_book.authorID=author.authorID) ORDER BY dateAdded DESC;`;
    let data = await db.execute(sql);

    await Promise.all(
      data[0].map(async (obj) => {
        const genres = await Book.getGenres(obj.ISBN);
        const genreValues = genres.map((genre) => genre.genre);
        obj.genres = genreValues;
      })
    );
    return res.json(data[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getOneBook = async (req, res) => {
  try {
    const { isbn } = req.params;
    const book_details = await Book.getOne(isbn);

    const genres = await Book.getGenres(book_details[0].ISBN);
    const genreValues = genres.map((genre) => genre.genre);
    book_details[0].genres = genreValues;
    // await Promise.all(
    //   book_details.map(async (obj) => {
    //     const genres = await Book.getGenres(obj.ISBN);
    //     const genreValues = genres.map((genre) => genre.genre);
    //     obj.genres = genreValues;
    //   })
    // );
    return res.send(book_details[0]);
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
    let coverlink;
    if (!req.file) {
      const [oldLink, _] = await db.execute(
        `SELECT coverLink FROM book WHERE ISBN=?`,
        [ISBN]
      );
      coverlink = oldLink[0]["coverLink"];
    } else {
      coverlink = "http://localhost:3001/books/covers/" + req.file.filename;
      await deleteOldCoverFile(ISBN);
    }

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
      genres
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
    const genreValues = genres.map((genre) => {
      return genre.genre;
    });
    console.log("Get genres of book");
    if (req) return res.status(200).send(genreValues);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
