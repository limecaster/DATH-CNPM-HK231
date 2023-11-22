import { Router } from "express";
import {
  createBook,
  getAllBook,
  updateBookByISBN,
  DeleteBookByISBN,
} from "../controllers/bookController.js";

const router = Router();
router.route("/").get(getAllBook).post(createBook).put(updateBookByISBN);
router.route("/:isbn").delete(DeleteBookByISBN);

export const bookRouter = router;
