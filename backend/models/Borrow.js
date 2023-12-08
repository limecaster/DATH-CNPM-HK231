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

  static getAllBorrow = async () => {
    const [borrowDetails, _] = await db.execute(`SELECT * FROM borrow;`);
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
