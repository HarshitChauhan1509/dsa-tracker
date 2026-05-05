import { getChaptersByTopic } from "../services/Chapter.service.js";

export const fetchChapters = async (req, res) => {
  try {
    const { topicId } = req.params;
    const chapters = await getChaptersByTopic(topicId);
    res.json(chapters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};