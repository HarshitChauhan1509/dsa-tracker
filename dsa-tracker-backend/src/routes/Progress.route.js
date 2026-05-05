import express from "express";
import authMiddleware from "../middleware/Auth.middleware.js";
import {
  updateUserProgress,
  fetchUserProgress
} from "../controllers/Progress.controller.js";

const router = express.Router();

router.post("/", authMiddleware, updateUserProgress);
router.get("/", authMiddleware, fetchUserProgress);

export default router;