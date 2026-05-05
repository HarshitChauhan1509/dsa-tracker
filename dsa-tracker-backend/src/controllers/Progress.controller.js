import { updateProgress, getUserProgress } from "../services/Progress.service.js";

export const updateUserProgress = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { problemId, completed } = req.body;

    const progress = await updateProgress(userId, problemId, completed);

    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchUserProgress = async (req, res) => {
  try {
    const userId = req.user.userId;

    const progress = await getUserProgress(userId);

    res.json(progress);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};