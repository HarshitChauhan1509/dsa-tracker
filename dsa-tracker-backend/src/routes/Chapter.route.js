import express from "express";
import { fetchChapters } from "../controllers/Chapter.controller.js";

const router = express.Router();

router.get("/:topicId", fetchChapters);

export default router;