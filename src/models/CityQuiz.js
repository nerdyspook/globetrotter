import mongoose from "mongoose";

const CityQuizSchema = new mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  clues: [{ type: String, required: true }],
  fun_fact: [{ type: String, required: true }],
  trivia: [{ type: String, required: true }],

  // quiz-specific fields
  prompt: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctAnswer: { type: String, required: true },
  checkpoint: { type: Number, default: 1 }, // 1=easy,2=medium,3=hard
});

export default mongoose.models.CityQuiz ||
  mongoose.model("CityQuiz", CityQuizSchema);
