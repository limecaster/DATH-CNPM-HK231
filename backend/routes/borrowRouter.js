import { Router } from "express";
import {
  insertBorrow,
  getAllBorrow,
  getGeneralBorrowInfo,
  getBorrowDetails,
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
router.route("/:readerId").get(getBorrowDetails); // hiển thị chi tiết lịch sử mượn trả của reader
router.route("/:readerId/general-info").get(getGeneralBorrowInfo); // hiển thị thông tin mượn trả chung của reader (ở trang profile)
export const borrowRouter = router;
