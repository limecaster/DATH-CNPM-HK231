import { Router } from "express";
import { createManager, getAllManager } from "../controllers/managerController.js";
import { loginManager } from "../controllers/authController.js";

const router = Router()

router.get("/gets", getAllManager);
router.post("/signup", createManager);
router.post("/login", loginManager);

export const managerRouter = router;