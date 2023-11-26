import { Router } from "express";
import { createManager, validateManagerAccount, getAllManager } from "../controllers/managerController.js";

const router = Router()

router.route("/").get(getAllManager).post(createManager).post(validateManagerAccount);

export const managerRouter = router;