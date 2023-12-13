import { Router } from "express";
import { creatingReader, 
         gettingAllReader, 
         suggestingBookWithEmail,
         updatingReader } from "../controllers/readerController.js";
import { loginReader } from "../controllers/authController.js";

const router = Router()

router.get("/gets", gettingAllReader);
router.post("/signup", creatingReader);
router.post("/login", loginReader);
router.post("/suggestBook", suggestingBookWithEmail);
router.put("/update", updatingReader);

export const readerRouter = router;