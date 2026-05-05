import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
});

export default mongoose.model("Topic", topicSchema);