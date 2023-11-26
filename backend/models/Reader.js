import { db } from '../config/dbConfig'

export class Reader {
  constructor(name, sex, dob, phoneNumber, email, university, 
              accountId, username, password, openedDay, accountType) 
  {
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
}