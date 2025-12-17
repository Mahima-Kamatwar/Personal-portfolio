import express from "express";
import {
  addProject,
  getAllProjects,
  deleteProject
} from "../controller/projectController.js";

import { upload } from "../middleware/upload.js";

const router = express.Router();

router.post("/projects", upload.single("image"), addProject);
router.get("/projects", getAllProjects);
router.delete("/projects/:id", deleteProject);

export default router;
