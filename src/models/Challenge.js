import mongoose from "mongoose";

const ParticipantSchema = new mongoose.Schema({
  username: { type: String, required: true },
  finalScore: { type: Number, default: 0 },
  done: { type: Boolean, default: false },
});

const ChallengeSchema = new mongoose.Schema({
  challenger: {
    username: { type: String, required: true },
    highScore: { type: Number, default: 0 },
  },
  participants: [ParticipantSchema],
  createdAt: { type: Date, default: Date.now },
});

let Challenge;
try {
  // If the model already exists, use that.
  Challenge = mongoose.model("Challenge");
} catch (error) {
  // Otherwise, create a new model.
  Challenge = mongoose.model("Challenge", ChallengeSchema);
}

export default Challenge;
