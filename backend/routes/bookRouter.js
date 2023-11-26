import { Router } from "express";
import {
  createBook,
  getAllBook,
  updateBookByISBN,
  DeleteBookByISBN,
  GetBookGenres,
} from "../controllers/bookController.js";

const router = Router();
router.route("/").get(getAllBook).post(createBook);
router.route("/:isbn").delete(DeleteBookByISBN).put(updateBookByISBN);
router.route("/:isbn/genres").get(GetBookGenres);

export const bookRouter = router;
