import { getAllTopics } from "../services/Topic.service.js";
import asyncHandler from "../utils/asyncHandler.util.js";


export const fetchTopics = asyncHandler(async (req, res) => {
  const topics = await getAllTopics();
  res.json(topics);
});