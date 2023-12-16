import mongoose from "mongoose";
const TaskSchema = mongoose.Schema(
  {
    userId: {
      type: String,
    },
    type: {
      type: String,
      enums: ["personal", "wishlist", "work"],
      default: "personal",
    },
    status: {
      type: String,
      enums: ["pending", "completed"],
      default: "completed",
    },
    name: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
