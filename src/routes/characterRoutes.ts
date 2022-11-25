import express from "express";
import characterController from "../controllers/characterController";

const router = express.Router();

router.get("/", characterController.list);

export default router;
