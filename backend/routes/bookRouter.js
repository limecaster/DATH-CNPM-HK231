import { Router } from "express";
import { createBook } from "../controllers/bookController.js";

const router = Router();
router.route("/").post(createBook);

export const bookRouter = router;
