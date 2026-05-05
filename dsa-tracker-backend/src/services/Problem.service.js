import Problem from "../models/Problem.model.js";

export const getProblemsByChapter = async (chapterId) => {
  return await Problem.find({ chapterId });
};