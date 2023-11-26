import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { db } from "../config/dbConfig.js";

export const loginManager = async (req, res) => {

  const { email, password } = req.body;

  // Simulated database query to get manager data by email
  let sql = `
      SELECT \`email\`, \`password\`
      FROM manager
      WHERE \`email\` = '${email}';  
  `
  const manager = await db.execute(sql);
  if (!manager || !await bcrypt.compare(password, manager[0][0].password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Generate JWT token
  const token = jwt.sign({ email: manager.email }, 'T1VoDich', { expiresIn: '1h' });

  res.json({ token });
};
