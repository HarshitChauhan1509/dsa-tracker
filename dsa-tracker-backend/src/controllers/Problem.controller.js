import { getProblemsByChapter } from "../services/Problem.service.js";

export const fetchProblems = async (req, res) => {
  try {
    const { chapterId } = req.params;
    const problems = await getProblemsByChapter(chapterId);
    res.json(problems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};