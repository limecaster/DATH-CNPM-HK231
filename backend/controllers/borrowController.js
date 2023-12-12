import { Borrow } from "../models/Borrow.js";
import { db } from "../config/dbConfig.js";

export const getDashboardBook = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const [dashboard_book, _] = await db.execute(
        `SELECT * FROM dashboard_book;`
      );

      return res.json(dashboard_book);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getDashboardReader = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const [dashboard_reader, _] = await db.execute(
        `SELECT * FROM dashboard_reader;`
      );

      return res.json(dashboard_reader);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getDashboardInfo = async (req, res) => {
  try {
    const [dashboard_info, _] = await db.execute(
      `SELECT * FROM dashboard_info;`
    );

    return res.json(dashboard_info);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getBorrowDetails = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const { readerId } = req.params;

      const borrow_details = await Borrow.getBorrowDetailsByReader(readerId);

      return res.json(borrow_details);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getGeneralBorrowInfo = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const { readerId } = req.params;

      const [borrow_info, _] = await Borrow.getGeneralBorrowInfoByReader(
        readerId
      );

      return res.json(borrow_info);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getAllBorrow = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const borrows = await Borrow.getAllBorrow();
      return res.json(borrows);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const insertBorrow = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const { ISBN, readerId, borrowDate, givebackDate } = req.body;
      // kiem tra so luong sach ton kho
      let [copyNumber, _] = await db.execute(
        `SELECT copyNumber FROM book WHERE ISBN = ?`,
        [ISBN]
      );
      copyNumber = copyNumber[0]["copyNumber"];
      if (copyNumber == 0) {
        return res
          .status(500)
          .send({ message: "Thư viện hiện đã hết đầu sách này" });
      }
      // kiểm tra ngày mượn, trả
      const date1 = new Date(borrowDate);
      const date2 = new Date(givebackDate);
      if (date2 < date1)
        return res
          .status(400)
          .send({ message: "Thông tin ngày mượn, trả không phù hợp" });
      let registerDate = new Date();
      registerDate = registerDate.toISOString().slice(0, 19).replace("T", " ");
      const status = "Chờ nhận sách";
      const borrow_info = await Borrow.save(
        ISBN,
        readerId,
        borrowDate,
        givebackDate,
        registerDate,
        status
      );
      console.log("Insert borrow order");
      return res.status(200).send(borrow_info);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
