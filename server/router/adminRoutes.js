import express from "express";
import { adminLogin, adminRegister } from "../controller/adminController.js";

const router = express.Router();

// REGISTER (one time)
router.post("/register", adminRegister);

// LOGIN
router.post("/login", adminLogin);

export default router;
