import { Router } from "express";
import { isFavorite, setFavorite } from "../controllers/favoriteController.js";
// localhost:3001/favorite/...
const router = Router();
router
  .route("/")
  .post(setFavorite) // thêm/loại bỏ khỏi danh sách yêu thích
  .get(isFavorite); // kiểm tra trạng thái yêu thích
/* form cho cả get và post
  ISBN: 9780143039976
  readerId: ST1000000
*/
export const favoriteRouter = router;
