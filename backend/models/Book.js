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
    let sql = `CALL InsertBook('${this.ISBN}','${this.title}','${this.coverlink}','${this.desc}','${this.authorName}',
    '${this.publisher}',${this.publishDate},'${this.coverType}',${this.noPages},'${this.language}', '${this.dateAdded}')`;
    const [newBook, _] = await db.execute(sql);
    for (const genre of this.genres) {
      await db.execute(
        `INSERT INTO genre_of_book VALUES ('${genre}','${this.ISBN}');`
      );
    }
    return newBook;
  };
  update = async () => {
    let sql = `CALL UpdateBook('${this.ISBN}','${this.title}','${this.coverlink}','${this.desc}','${this.authorName}',
    '${this.publisher}',${this.publishDate},'${this.coverType}',${this.noPages},'${this.language}')`;
    const [newBook, _] = await db.execute(sql);
    await db.execute(`DELETE FROM genre_of_book WHERE ISBN='${this.ISBN}';`);
    for (const genre of this.genres) {
      await db.execute(
        `INSERT INTO genre_of_book VALUES ('${genre}','${this.ISBN}');`
      );
    }
    return newBook;
  };
}
