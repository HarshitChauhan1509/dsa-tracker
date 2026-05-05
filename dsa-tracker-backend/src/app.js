import express from "express";
import cors from "cors";

import authRoutes from "./routes/Auth.route.js";
import topicRoutes from "./routes/Topic.route.js";
import chapterRoutes from "./routes/Chapter.route.js";
import problemRoutes from "./routes/Problem.route.js";
import progressRoutes from "./routes/Progress.route.js";

import errorMiddleware from "./middleware/Error.middleware.js";
import { apiLimiter } from "./middleware/RateLimiter.middleware.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api", apiLimiter);

app.use("/api/auth", authRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/chapters", chapterRoutes);
app.use("/api/problems", problemRoutes);
app.use("/api/progress", progressRoutes);


export default app;