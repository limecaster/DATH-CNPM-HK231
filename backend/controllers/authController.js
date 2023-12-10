import jwt from 'jsonwebtoken';
import bcrypt, { genSalt } from 'bcrypt';
import { db } from "../config/dbConfig.js";

export const loginManager = async (req, res) => {

  const { email, password } = req.body;

  let sql = `
      SELECT \`email\`, \`password\`
      FROM manager
      WHERE \`email\` = '${email}';  
  `;

  try {
    var manager = await db.execute(sql);
  }
  catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
  }
  console.log(manager)
  if (!manager[0][0] || !await bcrypt.compare(password, manager[0][0].password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ email: manager.email }, 'T1VoDich', { expiresIn: '1h' });

  res.json({ token });
};

export const loginReader = async (req, res) => {

  const { email, password } = req.body;

  let sql = `
      SELECT \`email\`, \`password\`
      FROM reader
      WHERE \`email\` = '${email}';  
  `;

  try {
    var reader = await db.execute(sql);
  }
  catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
  }
  if (!reader[0][0] || !await bcrypt.compare(password, reader[0][0].password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ email: reader.email }, 'T1VoDich', { expiresIn: '1h' });

  res.json({ token });
};
