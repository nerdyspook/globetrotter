import mongoose from "mongoose";

const QuestionStateSchema = new mongoose.Schema({
  cityQuizId: mongoose.Schema.Types.ObjectId,
  usedSecondHint: { type: Boolean, default: false },
  answered: { type: Boolean, default: false },
});

const GameSessionSchema = new mongoose.Schema({
  username: { type: String, required: true },
  checkpoint: { type: Number, default: 1 }, // 1,2,3
  questionIndex: { type: Number, default: 0 },
  livesLeft: { type: Number, default: 15 },
  score: { type: Number, default: 0 },
  isOver: { type: Boolean, default: false },
  correctStreak: { type: Number, default: 0 },

  // array of references to CityQuiz docs
  questions: [QuestionStateSchema],
});

export default mongoose.models.GameSession ||
  mongoose.model("GameSession", GameSessionSchema);
