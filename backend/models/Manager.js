import { db } from '../config/dbConfig'

export class Manager {
  constructor(name, sex, dob, phoneNumber, email, accountId, 
              username, password, openedDay, accountType) 
  {
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
    let sql = `
      INSERT INTO manager(
        name, sex, dob, phoneNumber, email, accountId, username, password, openedDay, accountType
      )
      VALUES(
        '${this.name}', '${this.sex}', '${this.dob}', '${this.phoneNumber}', '${this.email}', 
        '${this.accountId}', '${this.username}', '${this.password}', '${this.openedDay}', 
        '${this.accountType}' 
      )
    `;

    const [newManager, _] = await db.execute(sql);

    return newManager;
  }
}