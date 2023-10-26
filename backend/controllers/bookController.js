import { Book } from "../models/Book.js";

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
