import { Book, searchBook } from "../models/Book.js";
import { db } from "../config/dbConfig.js";
import { unlink } from "fs";
import { log } from "console";
import { verifyToken } from "../middleware/jwtAuthentication.js";
export const createBook = async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Request File:", req.file);
  try {
    verifyToken(req, res, async () => {
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
        copyNumber,
        genres,
      } = req.body;
      if (!ISBN || !title || !desc) {
        return res
          .status(400)
          .send({ message: "Pls send all required fields!" });
      }

      const genresArray =
        typeof genres === "string"
          ? genres.split(", ").map((genre) => genre.trim())
          : genres;
      console.log("Genres:", genresArray);

      const coverlink =
        "http://localhost:3001/books/covers/" + req.file.filename;

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
        copyNumber,
        genresArray
      );
      book = await book.save();

      console.log("Create new book");
      return res.status(201).send(book);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getBookByGenre = async (req, res) => {
  try {
    const { genre } = req.params;
    let sql = `
  SELECT ISBN, title, coverLink, \`authorName\`, \`desc\`, publisher, publishDate, coverType, noPages, \`language\`, copyNumber , DATE_FORMAT(dateAdded, "%Y-%m-%d %H:%i:%s") AS dateAdded 
FROM ((book natural join author_write_book) join author on author_write_book.authorID=author.authorID natural join genre_of_book) WHERE genre=? ORDER BY dateAdded DESC;`;
    let data = await db.execute(sql, [genre]);

    await Promise.all(
      data[0].map(async (obj) => {
        const genres = await Book.getGenres(obj.ISBN);
        const genreValues = genres.map((genre) => genre.genre);
        // obj.genres = genreValues;
        obj.genres = genreValues.join(", ");
      })
    );
    return res.json(data[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getAllGenres = async (req, res) => {
  try {
    let sql = `SELECT genre, SUBSTRING_INDEX(GROUP_CONCAT(coverLink ORDER BY RAND()), ',', 1) AS random_coverLink
FROM genre_of_book
NATURAL JOIN book
GROUP BY genre;`;
    let [genres, _] = await db.execute(sql);
    return res.status(200).send(genres);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getAllBook = async (req, res) => {
  try {
    let sql = `
  SELECT ISBN, title, coverLink, \`authorName\`, \`desc\`, publisher, publishDate, coverType, noPages, \`language\`, copyNumber , DATE_FORMAT(dateAdded, "%Y-%m-%d %H:%i:%s") AS dateAdded 
FROM ((book natural join author_write_book) join author on author_write_book.authorID=author.authorID) ORDER BY dateAdded DESC;`;
    let data = await db.execute(sql);

    await Promise.all(
      data[0].map(async (obj) => {
        const genres = await Book.getGenres(obj.ISBN);
        const genreValues = genres.map((genre) => genre.genre);
        // obj.genres = genreValues;
        obj.genres = genreValues.join(", ");
      })
    );
    return res.json(data[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getFavoriteBookOfReader = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const { readerId } = req.params;
      const favorite_list = await Book.getFavoriteList(readerId);
      console.log(favorite_list);
      return res.send(favorite_list);
    });
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
    return res.send(book_details[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

const deleteOldCoverFile = async (isbn) => {
  console.log("delete:", isbn);
  const ISBN = isbn;
  console.log("delete:", ISBN);
  try {
    const [result, _] = await db.execute(
      `SELECT coverLink FROM book WHERE ISBN=?`,
      [ISBN]
    );

    // Check if there is data returned from the query
    if (result.length === 0 || !result[0].coverLink) {
      console.log("No coverLink found for ISBN:", isbn);
      return false;
    }

    const oldLink = result[0].coverLink;
    console.log("delete:", isbn);

    const fileName = oldLink.slice(35);
    const filePath = "./public/uploads/" + fileName;

    unlink(filePath, (err) => {
      if (err) {
        console.error(`Error deleting file ${filePath}:`, err);
      }
    });

    return true;
  } catch (error) {
    console.error("Error querying database:", error);
    return false;
  }
};

export const updateBookByISBN = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
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
        copyNumber,
        genres,
      } = req.body;
      let coverlink = req.body.coverlink;
      // console.log("Request File:", req.file);
      console.log(`Updating book:`, coverlink);
      if (!ISBN || !title || !desc) {
        return res
          .status(400)
          .send({ message: "Pls send all required fields!" });
      }
      if (coverlink === undefined) {
        console.log("cololo:", coverlink);
        coverlink = "http://localhost:3001/books/covers/" + req.file.filename;
        await deleteOldCoverFile(ISBN);
      }
      const genresArray =
        typeof genres === "string"
          ? genres.split(", ").map((genre) => genre.trim())
          : genres;
      console.log("Genres:", genresArray);

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
        copyNumber,
        genresArray
      );
      console.log(book);
      book = await book.update();

      console.log("Update book");

      return res.status(201).send(book);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const DeleteBookByISBN = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const { isbn } = req.params;
      if (!isbn) {
        return res
          .status(400)
          .send({ message: "ISBN is required for deleting a book." });
      }
      console.log(isbn);
      await deleteOldCoverFile(isbn);
      console.log("Delete book");
      await Book.deleteOne(isbn);

      return res.status(200).send({ message: "Delete success" });
    });
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

export const SearchBook = async (searchText) => {
  try {
    const results = await searchBook(searchText);
    return results;
  } catch (error) {
    console.error(error);
    return;
  }
};
