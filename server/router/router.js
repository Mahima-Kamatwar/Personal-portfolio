import express from "express"
import { upload } from "../middleware/upload.js";
import {  uploadFile } from "../controller/controller.js"
import { addProject, getAllProjects, deleteProject } from "../controller/projectController.js";

const router = express.Router();

// router.get("/chat", async(req,res) => {
//     try{
//         const question = req.query.q || "What is AI";
//         const answer = await getResponse(question);
//         res.json({answer})
//     }catch(err){
//         console.log(err);
//         res.status(500).json({ msg: "Internal server error" });
//     }
// })

// Route for uploading file
// router.post("/upload", upload.single("file"), uploadFile)
router.get("/projects", getAllProjects)

router.post("/addprojects", upload.single("image"), addProject)

router.delete("/projects/:id", deleteProject);


export default router;
