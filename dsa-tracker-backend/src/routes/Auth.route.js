import express from "express";
import { register, login } from "../controllers/Auth.controller.js";
import { authLimiter } from "../middleware/RateLimiter.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", authLimiter, login);

export default router;