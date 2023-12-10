import { Manager, getAllManagers, getLastManagerId, findByEmail } from "../models/Manager.js";
import bcrypt from 'bcrypt';

// Function to hash password before storing them to the database
const hashPassword = async (plainPassword) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw error;
  }
};


export const createManager = async (req, res) => {

  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);
  try {
    const {
      name,
      email,
      password,
    } = req.body;

    if (
      !name ||
      !email ||
      !password) {
      return res.status(400).send({ message: "Pls send all required fields!" });
    }

    // Search email in database
    const managerFound = await findByEmail(email);
    if (managerFound) {
      return res.status(400).send({ message: "Email is already in use!" });
    }

    let identityPart = await getLastManagerId()
    identityPart = identityPart[0].managerId.slice(2); // Get last managerId, then temporary remove 2 first characters
    const managerId = "MS" + (parseInt(identityPart) + 1).toString(); // Parse to int and add 1. finally, parse to string and add 2 first characters

    const sex = "M"; // Default value
    const dob = "1999-01-01"; // Default value
    const phoneNumber = "0123456789"; // Default value
    const accountId = managerId;
    const username = email; // Default value
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);
    // Get current date with datetime mysql format and store it to openedDay
    const openedDay = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const accountType = "MS"; // Default value

    let manager = new Manager(
      managerId,
      name,
      sex,
      dob,
      phoneNumber,
      email,
      accountId,
      username,
      hashedPassword,
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
    // return getAllManager(); 
    const data = await getAllManagers();
    return res.json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};


