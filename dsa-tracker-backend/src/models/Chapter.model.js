import mongoose from "mongoose";

const chapterSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topicId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Topic",
    required: true,
  }
});

export default mongoose.model("Chapter", chapterSchema);