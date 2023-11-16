import { db } from '../config/dbConfig'

export class Manager {
  constructor(name, sex, dob, phoneNumber, email, accountId) {
    this.name = name;
    this.sex = sex;
    this.dob = dob;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.accountId = accountId;
  }

  addNewManager = async () => {
    let sql = `
      INSERT INTO manager(
        name, sex, dob, phoneNumber, email, accountId
      )
      VALUES(
        '${this.name}', '${this.sex}', '${this.dob}', '${this.phoneNumber}', '${this.email}', '${this.accountId}'
      )
    `;

    const [newManager, _] = await db.execute(sql);

    return newManager;
  }

  updateManagerInfo = async () => {
    let sql = `

    `
  }
}