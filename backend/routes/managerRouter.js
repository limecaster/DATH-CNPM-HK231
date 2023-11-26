import { Router } from "express";
import { createManager, validateManagerAccount } from "../controllers/managerController.js";

const router = Router()

router.route("/").post(createManager).post(validateManagerAccount);

export const managerRouter = router;