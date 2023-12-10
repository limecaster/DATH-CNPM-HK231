import { Router } from "express";
import { createReader, getAllReader, suggestBookWithEmail } from "../controllers/readerController.js";
import { loginReader } from "../controllers/authController.js";

const router = Router()

router.get("/gets", getAllReader);
router.post("/signup", createReader);
router.post("/login", loginReader);
router.post("/suggestBook", suggestBookWithEmail);

export const readerRouter = router;