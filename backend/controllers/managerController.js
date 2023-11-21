import { Manager } from "../models/Manager.js";
import { db } from "../config/dbConfig.js";

export const createManager = async (req, res) => {

  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);
  try {
    const {
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

    if (!ISBN || !title || !desc) {
      return res.status(400).send({ message: "Pls send all required fields!" });
    }
    const coverlink = req.file.path;

    console.log("SetLink:", coverlink);


    let manager = new Manager(
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
  try {
    let sql = 
    `
    SELECT 
        name, sex, dob, phoneNumber, email, accountId, username, password, openedDay, accountType
    FROM manager;
    `;
    const data = await db.execute(sql);
    return res.json(data[0]);
  } 
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};