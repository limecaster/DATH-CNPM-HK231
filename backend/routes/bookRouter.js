import { Router } from "express";
import {
  createBook,
  getAllBook,
  updateBookByISBN,
} from "../controllers/bookController.js";

const router = Router();
router.route("/").get(getAllBook).post(createBook).put(updateBookByISBN);

export const bookRouter = router;
