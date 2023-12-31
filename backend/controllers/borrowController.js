import { Borrow, getBorrowChartInfomation } from "../models/Borrow.js";
import { db } from "../config/dbConfig.js";
import { verifyToken } from "../middleware/jwtAuthentication.js";
import { read } from "fs";
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

export const getNotification = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const { readerId } = req.params;
      const borrow_info = await Borrow.getBorrowDetailsByReader(readerId);
      const today = new Date();
      const noti = borrow_info.map((borrow) => {
        if (borrow.status === "Hoàn thành") {
          return `[Trả sách thành công] Bạn đã trả thành công sách ${borrow.title}`;
        } else if (borrow.status === "Chờ nhận sách") {
          return `[Đăng kí mượn] Bạn đã đăng kí mượn thành công sách ${borrow.title}`;
        } else if (borrow.status === "Đang mượn") {
          let due = new Date(borrow.givebackDate) - today;
          due = Math.ceil(due / (24 * 60 * 60 * 1000));
          console.log(due);
          if (due < 3 && due > 0)
            return `[Đến hạn trả sách] Còn ${due} ngày đến hạn trả sách ${borrow.title}`;
          else if (due < 0)
            return `[Trễ hạn trả sách] Sách ${
              borrow.title
            } đã trễ hạn trả ${-due} ngày`;
          else
            return `[Mượn thành công] Bạn đã mượn thành công sách ${borrow.title}`;
        } else {
          // Handle other statuses if needed
          return "Status not applicable for this message format";
        }
      });

      return res.status(200).send(noti);
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

export const getBorrowChartInfo = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      const year = req.body.year;
      const [borrow_chart_info, _] = await getBorrowChartInfomation(year);

      res.status(200).send(borrow_chart_info);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}
