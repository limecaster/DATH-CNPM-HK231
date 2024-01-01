import { Router } from "express";
import {
  insertBorrow,
  getAllBorrow,
  getGeneralBorrowInfo,
  getBorrowDetails,
  getDashboardInfo,
  getDashboardReader,
  getDashboardBook,
  getNotification,
  getBorrowChartInfo
} from "../controllers/borrowController.js";
// localhost:3001/borrow/...
const router = Router();
router
  .route("/")
  .post(insertBorrow) // đăng ký mượn sách
  /* form
  ISBN: 9780143039976
  readerId: ST1000000
  borrowDate: 2023-12-08 13:27:19
  givebackDate: 2023-12-09 13:27:19
  */
  .get(getAllBorrow); // hiển thị list thông tin mượn sách
router.route("/dashboard/general-info").get(getDashboardInfo); // thông tin số ng dùng, tổng số sách, tỉ lệ mượn trả
router.route("/dashboard/reader-list").get(getDashboardReader); // danh sách người dùng
router.route("/dashboard/book-list").get(getDashboardBook); // danh sách các sách được mượn nhiều nhất
router.route("/dashboard/borrow-chart").get(getBorrowChartInfo); // hiển thị biểu đồ mượn trả theo năm
router.route("/notification/:readerId").get(getNotification); // thông báo theo reader

router.route("/:readerId").get(getBorrowDetails); // hiển thị chi tiết lịch sử mượn trả của reader
router.route("/:readerId/general-info").get(getGeneralBorrowInfo); // hiển thị thông tin mượn trả chung của reader (ở trang profile)
router.route("/dashboard/borrow-chart").post(getBorrowChartInfo); // hiển thị biểu đồ mượn trả theo năm
export const borrowRouter = router;
