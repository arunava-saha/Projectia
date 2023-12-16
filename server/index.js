import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";

import mongoose from "mongoose";
import ProjectRouter from "./routes/project.js";
import UserRouter from "./routes/user.js";

dotenv.config();
const port = process.env.PORT || 3441;
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({ message });
});

app.use("/project", ProjectRouter);
app.use("/auth", UserRouter);
app.get("/", (req, res) => res.send("server home page"));

mongoose
  .connect(process.env.DB)
  .then(() => console.log("connnect to database"))
  .catch((err) => console.log(err));
app.listen(port, () => console.log(`http://localhost:${port}`));
