import express from "express";
import characterRoutes from "./routes/characterRoutes";
import connectDB from "./db";

const app = express();

connectDB();

app.use(express.json());

const PORT = 3000;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!!");
  res.send("pong");
});

app.use("/characters", characterRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
