import express from "express";
import {
  create,
  project,
  projects,
  remove,
  update,
} from "../controllers/project.js";
import { verifyJwtToken } from "../config/verify.js";
const router = express.Router();

router.post("/create", verifyJwtToken, create);
router.put("/:id", verifyJwtToken, update);
router.delete("/:id", verifyJwtToken, remove);
router.get("/:id", project);
router.get("/", projects);

export default router;
