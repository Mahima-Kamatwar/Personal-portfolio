import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// Load env FIRST
dotenv.config({ path: "./config.env" });

// Database connection
import "./database/connect.js";

// Routes
import router from "./router/router.js";
import projectRoutes from "./router/projectRoutes.js";
import adminRoutes from "./router/adminRoutes.js";

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static uploads folder
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// API Routes
app.use("/api/projects", projectRoutes);
app.use("/api/admin", adminRoutes);

// Other routes
app.use("/", router);

// Server
app.listen(port, () => {
  console.log(`✅ Server is running on port ${port}`);
});
