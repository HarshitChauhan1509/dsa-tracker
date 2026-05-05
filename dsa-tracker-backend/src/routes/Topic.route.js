import express from "express";
import { fetchTopics } from "../controllers/Topic.controller.js";

const router = express.Router();

router.get("/", fetchTopics);

export default router;