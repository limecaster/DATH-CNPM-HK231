import { read } from "fs";
import { db } from "../config/dbConfig.js";

export class Borrow {
  static save = async (
    ISBN,
    readerId,
    borrowDate,
    givebackDate,
    registerDate,
    status
  ) => {
    let connection;
    try {
      connection = await db.getConnection();
      await connection.beginTransaction();
      let sql = `INSERT INTO borrow VALUES(?,?,?,?,?,?)`;
      const [newBorrow, _] = await connection.execute(sql, [
        ISBN,
        readerId,
        borrowDate,
        givebackDate,
        registerDate,
        status,
      ]);
      await connection.execute(
        `UPDATE book SET copyNumber = copyNumber-1 WHERE ISBN=?`,
        [ISBN]
      );
      await connection.commit();

      return newBorrow;
    } catch (error) {
      if (connection) {
        await connection.rollback();
      }
      throw error;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  };

  static getBorrowDetailsByReader = async (readerId) => {
    const [borrowDetails, _] = await db.execute(
      `SELECT * from borrow_details WHERE readerId = ?;`,
      [readerId]
    );
    return borrowDetails;
  };

  static getGeneralBorrowInfoByReader = async (readerId) => {
    const [borrowInfo, _] = await db.execute(`CALL GetGeneralBorrowInfo(?)`, [
      readerId,
    ]);
    return borrowInfo;
  };

  static getAllBorrow = async () => {
    const [borrowDetails, _] =
      await db.execute(`SELECT ISBN, readerId, DATE_FORMAT(borrowDate, "%Y-%m-%d %H:%i:%s") AS borrowDate, DATE_FORMAT(givebackDate, "%Y-%m-%d %H:%i:%s") AS givebackDate,  DATE_FORMAT(registerDate, "%Y-%m-%d %H:%i:%s") AS registerDate, status FROM borrow;
`);
    return borrowDetails;
  };

  static getGenres = async (isbn) => {
    let connection;
    try {
      connection = await db.getConnection();
      await connection.beginTransaction();

      const [result] = await connection.execute(
        `SELECT genre FROM genre_of_book NATURAL JOIN book WHERE ISBN = ?;`,
        [isbn]
      );

      await connection.commit();

      return result;
    } catch (error) {
      if (connection) {
        await connection.rollback();
      }
      throw error;
    } finally {
      if (connection) {
        connection.release();
      }
    }
  };
}

export const getBorrowChartInfomation = async (year) => {
  let connection;
  try {
    connection = await db.getConnection();
    await connection.beginTransaction();
    let sql = `CALL GetBorrowChartInfomation(?)`;
    const [borrow_chart_info, _] = await connection.query(sql, [year]);
    await connection.commit();
    return borrow_chart_info;
  } catch (error) {
    if (connection) {
      await connection.rollback();
    }
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}
