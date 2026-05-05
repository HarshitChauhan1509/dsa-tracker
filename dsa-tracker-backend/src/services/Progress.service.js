import Progress from "../models/Progress.model.js";

export const updateProgress = async (userId, problemId, completed) => {
  return await Progress.findOneAndUpdate(
    { userId, problemId },
    { completed },
    { upsert: true, new: true }
  );
};

export const getUserProgress = async (userId) => {
  return await Progress.find({ userId });
};