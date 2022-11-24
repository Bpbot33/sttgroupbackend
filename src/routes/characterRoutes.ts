import express from "express";

const router = express.Router();

router.get("/", (_req, res) => {
  res.send("dame un bito");
});

export default router;
