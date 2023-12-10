import { Router } from "express";
import { createReader, getAllReader } from "../controllers/readerController.js";
import { loginReader } from "../controllers/authController.js";

const router = Router()

router.get("/gets", getAllReader);
router.post("/signup", createReader);
router.post("/login", loginReader);

export const readerRouter = router;