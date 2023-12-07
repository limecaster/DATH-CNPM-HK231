import { Router } from "express";
import {
  createBook,
  getAllBook,
  updateBookByISBN,
  DeleteBookByISBN,
  GetBookGenres,
} from "../controllers/bookController.js";
// /books
const router = Router();
router.route("/").get(getAllBook).post(createBook).put(updateBookByISBN);
router.route("/:isbn").delete(DeleteBookByISBN);
router.route("/:isbn/genres").get(GetBookGenres);

export const bookRouter = router;
