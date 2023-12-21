import { Manager, 
        getAllManagers, 
        getLastManagerId, 
        findByEmail,
        updateManager } from "../models/Manager.js";
import { verifyToken, hashPassword } from "../middleware/jwtAuthentication.js";


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
    verifyToken(req, res, async () => {
      // Return all managers
      const data = await getAllManagers();
      return res.json(data);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const updatingManager = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);
  try {
    verifyToken(req, res, async () => {
      const {
        name,
        sex,
        dob,
        phoneNumber,
        email,
        password
      } = req.body;

      if (!name || !sex || !dob || !phoneNumber || !email || !password) {
        return res.status(400).send({ message: "Pls send all required fields!" });
      }
      
      const managerFound = await findByEmail(email);
      if (!managerFound) {
        return res.status(400).send({ message: "Email is not in use!" });
      }

      const response = await updateManager(name, sex, dob, phoneNumber, email, await hashPassword(password));
      console.log("Update manager successfully");
      return res.status(200).send(response);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

export const gettingManager = async (req, res) => {
  console.log('Request Body:', req.body);
  console.log('Request File:', req.file);
  try {
    verifyToken(req, res, async () => {
      const managerEmail = req.decoded.email;

      const managerFound = await findByEmail(managerEmail);
      if (!managerFound) {
        return res.status(400).send({ message: "Email is not in use!" });
      }
      res.status(200).send(managerFound);
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
}

