import { Router } from "express";
import { insertBorrow, getAllBorrow } from "../controllers/borrowController.js";
// localhost:3001/borrow/...
const router = Router();
router
  .route("/")
  .post(insertBorrow) // đăng ký mượn sách
  .get(getAllBorrow); // hiển thị list thông tin mượn sách

export const borrowRouter = router;
