import { Manager } from "../models/Manager.js";
import { db } from "../config/dbConfig.js";

export const createManager = async (req, res) => {

  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);
  try {
    const {
      managerId,
      name,
      sex,
      dob,
      phoneNumber,
      email,
      accountId, 
      username,
      password,
      openedDay, 
      accountType
    } = req.body;

    if (!managerId ||
        !name ||
        !sex  ||
        !dob  ||
        !phoneNumber  ||
        !email  ||
        !accountId || 
        !username ||
        !password ||
        !openedDay || 
        !accountType) 
    {
      return res.status(400).send({ message: "Pls send all required fields!" });
    }

    let manager = new Manager(
      managerId,
      name,
      sex,
      dob,
      phoneNumber,
      email,
      accountId, 
      username,
      password,
      openedDay, 
      accountType
    );
    manager = await manager.save();
    console.log("Create new manager");
    return res.status(201).send(manager);
  } 
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};


export const getAllManager = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);

  try {
    let sql = `
    SELECT * FROM manager;
    `;
    const data = await db.execute(sql);
    return res.json(data[0]);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
