import { Manager } from "../models/Manager.js";
import { db } from "../config/dbConfig.js";
import { sha256 } from 'js-sha256'

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

    if (!name ||
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

export const validateManagerAccount = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);

  try {
    const {
      email,
      password
    } = req.body;

    let sql = 
    `
    SELECT email, hashedPassword
    FROM manager
    WHERE manager.email = '${email}';
    `;
    const data = await db.execute(sql);

    if (email == data[0] && sha256(password) == data[1]) {
      return res.status(200).send({ message: "Log in success." });
    }
    else {
      return res.status(401).send({ message: "Log in fail. Please check your email or password again."})
    }
  } 
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
