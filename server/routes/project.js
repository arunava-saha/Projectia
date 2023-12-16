import express from "express";
import {
  create,
  deleteProject,
  getAllProjects,
  getProject,
  updateProject,
} from "../controllers/project.js";
import { verifyJwtToken } from "../config/verify.js";
const router = express.Router();

router.post("/create", verifyJwtToken, create);
router.put("/:id", verifyJwtToken, updateProject);
router.delete("/:id", verifyJwtToken, deleteProject);
router.get("/:id", getProject);
router.get("/", getAllProjects);

export default router;
