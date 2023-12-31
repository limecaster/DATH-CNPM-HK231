import { Router } from "express";
import {
  createBook,
  getAllBook,
  updateBookByISBN,
  DeleteBookByISBN,
  GetBookGenres,
  getOneBook,
  getFavoriteBookOfReader,
  getAllGenres,
  getBookByGenre,
  SearchBook,
  getTrendingBooks,
} from "../controllers/bookController.js";
// /books
const router = Router();
router
  .route("/")
  .get(getAllBook) // thông tin tất cả các sách
  .post(createBook) // thêm sách
  .put(updateBookByISBN); // chỉnh sửa thông tin sách
router.route("/trending").get(getTrendingBooks); // list sách xu hướng
router.route("/favorite/:readerId").get(getFavoriteBookOfReader); // list sách ưa thích theo reader
router.route("/genres").get(getAllGenres); // list thể loại sách
router.route("/genres/:genre").get(getBookByGenre); // list sách theo thể loại

router.route("/search").get(async (req, res) => {
  const searchText = req.query.query;
  try {
    const data = await SearchBook(searchText);
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

router
  .route("/:isbn")
  .get(getOneBook) // thông tin sách theo ISBN
  .delete(DeleteBookByISBN); // xoá sách
router.route("/:isbn/genres").get(GetBookGenres); // thể loại sách theo ISBN

export const bookRouter = router;
