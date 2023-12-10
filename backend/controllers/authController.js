import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { db } from "../config/dbConfig.js";

const loginUser = async (req, res, tableName) => {
  const { email, password } = req.body;

  try {
    const result = await db.execute(`
      SELECT \`email\`, \`password\`
      FROM ${tableName}
      WHERE \`email\` = ?;
    `, [email]);

    const user = result[0][0];

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ email: user.email }, "T1VoDich", { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: 'Internal Server Error' });
  }
};

export const loginManager = async (req, res) => {
  await loginUser(req, res, 'manager');
};

export const loginReader = async (req, res) => {
  await loginUser(req, res, 'reader');
};
