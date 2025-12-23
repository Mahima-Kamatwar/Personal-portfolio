import express from "express";
import { upload } from "../middleware/upload.js";
import { uploadFile } from "../controller/controller.js";
import {
  addProject,
  getAllProjects,
  deleteProject,
} from "../controller/projectController.js";
import { getResponse } from "../controller/controller.js";

const router = express.Router();

// ai chat routes
router.get("/chat", async (req, res) => {
  try {
    const question = req.query.q || "What is MERN stack?";
    const answer = await getResponse(question);
    res.json({ answer });
  } catch (err) {
  console.error("CHAT ROUTE ERROR ", err);
  res.status(500).json({
    msg: "Internal server error",
    error: err.message,
  });
}
})

// project routes
router.get("/projects", getAllProjects);

router.post("/addprojects", upload.single("image"), addProject);

router.delete("/projects/:id", deleteProject);

export default router;
