import { db } from "../config/dbConfig.js";

export class Book {
  constructor(
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
    genres //list
  ) {
    this.ISBN = ISBN;
    this.title = title;
    this.coverlink = coverlink;
    this.desc = desc;
    this.authorName = authorName;
    this.publisher = publisher;
    this.publishDate = publishDate;
    this.coverType = coverType;
    this.noPages = noPages;
    this.language = language;
    this.genres = genres;
    this.dateAdded = new Date();
    this.dateAdded = this.dateAdded
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
  }
  save = async () => {
    let connection;
    try {
      connection = await db.getConnection();
      await connection.beginTransaction();
      let sql = `CALL InsertBook('${this.ISBN}','${this.title}','${this.coverlink}','${this.desc}','${this.authorName}',
    '${this.publisher}',${this.publishDate},'${this.coverType}',${this.noPages},'${this.language}', '${this.dateAdded}')`;
      const [newBook, _] = await connection.execute(sql);
      for (const genre of this.genres) {
        await connection.execute(
          `INSERT INTO genre_of_book VALUES ('${genre}','${this.ISBN}');`
        );
      }
      await connection.commit();

      return newBook;
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
  update = async () => {
    let connection;
    try {
      connection = await db.getConnection();
      await connection.beginTransaction();

      let sql = `CALL UpdateBook('${this.ISBN}','${this.title}','${this.coverlink}','${this.desc}','${this.authorName}',
    '${this.publisher}',${this.publishDate},'${this.coverType}',${this.noPages},'${this.language}')`;
      const [newBook, _] = await connection.execute(sql);
      await connection.execute(
        `DELETE FROM genre_of_book WHERE ISBN='${this.ISBN}';`
      );
      for (const genre of this.genres) {
        await connection.execute(
          `INSERT INTO genre_of_book VALUES ('${genre}','${this.ISBN}');`
        );
      }
      await connection.commit();

      return newBook;
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

  static deleteOne = async (isbn) => {
    let connection;
    try {
      connection = await db.getConnection();
      await connection.beginTransaction();

      const [result] = await connection.execute(
        `DELETE FROM book WHERE ISBN = ?;`,
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
