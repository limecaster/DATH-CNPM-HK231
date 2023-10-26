import express from "express";
import { json } from "express";
import { PORT } from "./env.js";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import { bookRouter } from "./routes/bookRouter.js";
const app = express();

app.use(json());
app.use(cors());

app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`App is running in PORT ${PORT}`);
});
