import express from "express";
import characterController from "../controllers/characterController";

const router = express.Router();

router.get("/", characterController.list);
//router.get("/populate", characterController.populateDB);

export default router;
