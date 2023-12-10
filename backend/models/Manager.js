import { db } from '../config/dbConfig.js'

export class Manager {
  constructor(managerId, name, sex, dob, phoneNumber, email, accountId,
    username, password, openedDay, accountType) {
    this.managerId = managerId;
    this.name = name;
    this.sex = sex;
    this.dob = dob;
    this.phoneNumber = phoneNumber;
    this.email = email;
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
      CALL InsertManager(
        '${this.managerId}',
        '${this.name}',
        '${this.sex}',
        '${this.dob}',
        '${this.phoneNumber}',
        '${this.email}',
        '${this.accountId}',
        '${this.username}',
        '${this.password}',
        '${this.openedDay}',
        '${this.accountType}'
        )`;
      const [newManager, _] = await connection.execute(sql);
      await connection.commit();

      return newManager;
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


export const getAllManagers = async () => {
  let connection;
  try {
    connection = await db.getConnection();
    await connection.beginTransaction();
    let sql = `
      SELECT * 
      FROM manager;
    `;

    const [managers] = await db.execute(sql);

    return managers;
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

export const getLastManagerId = async () => {
  let connection;
  try {
    connection = await db.getConnection();
    await connection.beginTransaction();
    let sql = `
      SELECT managerId 
      FROM manager 
      ORDER BY managerId DESC 
      LIMIT 1;
    `;

    const [lastManagerId] = await db.execute(sql);
    if (lastManagerId.length == 0) {
      return [{
        "managerId": "MS0000000"
      }];
    }
    return lastManagerId;
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

export const findByEmail = async (email) => {
  let connection;
  try {
    connection = await db.getConnection();
    await connection.beginTransaction();
    let sql = `
      SELECT * 
      FROM manager 
      WHERE email = '${email}';
    `;

    const [manager] = await db.execute(sql);

    return manager[0];
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
