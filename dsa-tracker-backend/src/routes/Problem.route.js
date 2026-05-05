import express from "express";
import { fetchProblems } from "../controllers/Problem.controller.js";

const router = express.Router();

router.get("/:chapterId", fetchProblems);

export default router;