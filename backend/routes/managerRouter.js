import { Router } from "express";
import { createManager, 
         getAllManager, 
         updatingManager } from "../controllers/managerController.js";
import { loginManager } from "../controllers/authController.js";

const router = Router()

router.get("/gets", getAllManager);
router.post("/signup", createManager);
router.post("/login", loginManager);
router.put("/update", updatingManager);

export const managerRouter = router;