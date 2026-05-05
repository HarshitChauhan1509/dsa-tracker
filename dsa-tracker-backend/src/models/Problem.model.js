import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  chapterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
  },
  youtubeLink: String,
  leetcodeLink: String,
  articleLink: String,
});

export default mongoose.model("Problem", problemSchema);