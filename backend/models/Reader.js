import { db } from '../config/dbConfig.js'

export class Reader {
  constructor(readerId, name, sex, dob, phoneNumber, email, university,
              accountId, username, password, openedDay, accountType) 
  {
    this.readerId = readerId;
    this.name = name;
    this.sex = sex;
    this.dob = dob;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.university = university;
    this.accountId = accountId;
    this.username = username;
    this.password = password;
    this.openedDay = openedDay;
    this.accountType = accountType;
  }

  save = async () => {
    let connection;
    try {
      connection = await db.getConnection();
      await connection.beginTransaction();
      let sql = `
      CALL InsertReader(
        '${this.readerId}',
        '${this.name}',
        '${this.sex}',
        '${this.dob}',
        '${this.phoneNumber}',
        '${this.email}',
        '${this.university}',
        '${this.accountId}',
        '${this.username}',
        '${this.password}',
        '${this.openedDay}',
        '${this.accountType}'
        )`;
      const [newReader, _] = await connection.execute(sql);
      await connection.commit();

      return newReader;
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

  update = async () => {
    
  }
}


export const getAllReaders = async () => {
  let connection;
  try {
    connection = await db.getConnection();
    await connection.beginTransaction();
    let sql = `
      SELECT * 
      FROM reader;
    `;

    const [readers] = await db.execute(sql);

    return readers;
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

export const getLastReaderId = async() => {
  let connection;
  try {
    connection = await db.getConnection();
    await connection.beginTransaction();
    let sql = `
      SELECT readerId 
      FROM reader 
      ORDER BY readerId DESC 
      LIMIT 1;
    `;

    const [lastReaderId] = await db.execute(sql);

    return lastReaderId;
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
