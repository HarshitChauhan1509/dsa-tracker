import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Problem",
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

progressSchema.index({ userId: 1, problemId: 1 }, { unique: true });

export default mongoose.model("Progress", progressSchema);