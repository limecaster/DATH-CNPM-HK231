import { db } from "../config/dbConfig.js";

export class Book {
  constructor(ISBN, title, description) {
    this.ISBN = ISBN;
    this.title = title;
    this.description = description;
  }
  save = async () => {
    let sql = `
        INSERT INTO book(
            ISBN,
            title,
            description
        )
        VALUES(
            '${this.ISBN}',
            '${this.title}',
            '${this.description}'
        )`;
    const [newBook, _] = await db.execute(sql);
    return newBook;
  };
}
