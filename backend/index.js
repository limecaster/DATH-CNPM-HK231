import express from "express";
import { json } from "express";
import { PORT } from "./env.js";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import { bookRouter } from "./routes/bookRouter.js";

import fileUpload from 'express-fileupload';

const app = express();

app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(json());
app.use(cors());
app.use(fileUpload());

app.use("/books", bookRouter);

app.listen(PORT, () => {
  console.log(`App is running in PORT ${PORT}`);
});
