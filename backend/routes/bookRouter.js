import { Router } from "express";
import {
  createBook,
  getAllBook,
  updateBookByISBN,
  DeleteBookByISBN,
  GetBookGenres,
  getOneBook,
} from "../controllers/bookController.js";
// /books
const router = Router();
router
  .route("/")
  .get(getAllBook) // thông tin tất cả các sách
  .post(createBook) // thêm sách
  .put(updateBookByISBN); // chỉnh sửa thông tin sách
router
  .route("/:isbn")
  .get(getOneBook) // thông tin sách theo ISBN
  .delete(DeleteBookByISBN); // xoá sách
router.route("/:isbn/genres").get(GetBookGenres); // thể loại sách theo ISBN

export const bookRouter = router;


