import { read } from "fs";
import { db } from "../config/dbConfig.js";

export class Favorite {
  static save = async (readerId, ISBN) => {
    let connection;
    try {
      connection = await db.getConnection();
      await connection.beginTransaction();
      let sql = `INSERT INTO favorite VALUES(?,?)`;
      const [newFavorite, _] = await connection.execute(sql, [readerId, ISBN]);
      await connection.commit();

      return newFavorite;
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

  static getFavorite = async (readerId, ISBN) => {
    const [favorite, _] = await db.execute(
      `SELECT * FROM favorite WHERE readerId = ? AND ISBN = ?;`,
      [readerId, ISBN]
    );
    return favorite[0];
  };

  static setFavorite = async (readerId, ISBN) => {
    let connection;
    try {
      connection = await db.getConnection();
      await connection.beginTransaction();
      const is_favorite = await this.getFavorite(readerId, ISBN);
      let result;
      if (is_favorite) {
        await connection.execute(
          `DELETE FROM favorite WHERE readerId=? AND ISBN=?`,
          [readerId, ISBN]
        );
        result = { isFavorite: false };
      } else {
        await connection.execute(`INSERT INTO favorite VALUES(?,?);`, [
          readerId,
          ISBN,
        ]);
        result = { isFavorite: true };
      }
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
