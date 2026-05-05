import Chapter from "../models/Chapter.model.js";

export const getChaptersByTopic = async (topicId) => {
  return await Chapter.find({ topicId });
};