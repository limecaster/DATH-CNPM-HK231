import { Reader, getAllReaders, getLastReaderId } from "../models/Reader.js";
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


export const createReader = async (req, res) => {

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

    let identityPart = await getLastReaderId()
    identityPart = identityPart[0].readerId.slice(2); // Get last readerId, then temporary remove 2 first characters
    const readerId = "ST" + (parseInt(identityPart) + 1).toString(); // Parse to int and add 1. finally, parse to string and add 2 first characters    const sex = "M"; // Default value

    const sex = "M"; // Default value
    const dob = "1999-01-01"; // Default value
    const phoneNumber = "0123456789"; // Default value
    const accountId = readerId;
    const username = email; // Default value
    const university = "HCMUT"; // Default value
    const hashedPassword = await hashPassword(password);
    console.log(hashedPassword);
    // Get current date with datetime mysql format and store it to openedDay
    const openedDay = new Date().toISOString().slice(0, 19).replace('T', ' ');
    const accountType = "ST"; // Default value

    let reader = new Reader(
      readerId,
      name,
      sex,
      dob,
      phoneNumber,
      email,
      university,
      accountId,
      username,
      hashedPassword,
      openedDay,
      accountType
    );
    reader = await reader.save();
    console.log("Create new reader");
    return res.status(201).send(reader);
  }
  catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};


export const getAllReader = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);

  try {
    // return getAllreader(); 
    const data = await getAllReaders();
    return res.json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};


