import { db } from '../config/dbConfig.js'
import bcrypt from 'bcrypt';


// Function to hash password before storing them to the database
const saltRounds = 10;
const hashPassword = async (plainPassword) => {
  try {
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

export class Manager {
  constructor(managerId, name, sex, dob, phoneNumber, email, accountId, 
              username, password, openedDay, accountType) 
  {
    this.managerId = managerId;
    this.name = name;
    this.sex = sex;
    this.dob = dob;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.accountId = accountId;
    this.username = username;
    this.password = hashPassword(password); // Hash password before storing them
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