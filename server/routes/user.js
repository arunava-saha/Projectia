import express from "express";
import { login, register } from "../controllers/user.js";
import { upload } from "../config/multer.js";
const Router = express.Router();

Router.post("/register", upload.single("picture"), register);

Router.post("/login", login);

export default Router;
