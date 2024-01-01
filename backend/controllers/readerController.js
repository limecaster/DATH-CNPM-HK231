import {
  Reader,
  getAllReaders,
  getLastReaderId,
  findByEmail,
  suggestBook,
  updateReader
} from "../models/Reader.js";

import { verifyToken, hashPassword } from "../middleware/jwtAuthentication.js";


export const creatingReader = async (req, res) => {

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
    const readerFound = await findByEmail(email);
    if (readerFound) {
      return res.status(400).send({ message: "Email is already in use!" });
    }

    let identityPart = await getLastReaderId();
    identityPart = identityPart[0].readerId.slice(2); // Get last readerId, then temporary remove 2 first characters
    const readerId = "ST" + (parseInt(identityPart) + 1).toString(); // Parse to int and add 1. finally, parse to string and add 2 first characters    const sex = "M"; // Default value

    const sex = "M"; // Default value
    const dob = "1999-01-01"; // Default value
    const phoneNumber = "0123456789"; // Default value
    const accountId = readerId;
    const username = email; // Default value
    const university = "HCMUT"; // Default value
    const hashedPassword = await hashPassword(password);
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


export const gettingAllReader = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);

  try {
    // Use the verifyToken middleware
    verifyToken(req, res, async () => {
      const data = await getAllReaders();
      return res.json(data);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const suggestingBookWithEmail = async (req, res) => {
  try {
    // Use the verifyToken middleware
    verifyToken(req, res, async () => {
      const { readerName, email, bookTitle, authorName } = req.body;
      try {
        await suggestBook(readerName, email, bookTitle, authorName);
        return res.status(200).send({ message: 'Suggest book successfully!' });
      } catch (error) {
        return res.status(400).send({ message: error.message });
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

export const updatingReader = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);
  try {
    verifyToken(req, res, async () => {
      const {
        name,
        sex,
        dob,
        phoneNumber,
        university,
        email,
        password
      } = req.body;

      if (!name || !sex || !dob || !phoneNumber || !university || !email || !password) {
        return res.status(400).send({ message: "Pls send all required fields!" });
      }
      
      const readerFound = await findByEmail(email);
      if (!readerFound) {
        return res.status(400).send({ message: "Email is not in use!" });
      }

      const response = await updateReader(name, sex, dob, phoneNumber, university, email, await hashPassword(password));
      console.log("Update reader successfully");
      return res.status(200).send(response);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

export const gettingReader = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);
  try {
    verifyToken(req, res, async () => {
      const readerEmail = req.decoded.email;

      const readerFound = await findByEmail(readerEmail);
      if (!readerFound) {
        return res.status(400).send({ message: "Email is not in use!" });
      }
      res.status(200).send(readerFound);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}



