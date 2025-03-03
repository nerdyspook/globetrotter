import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, default: null },
  highestScore: { type: Number, default: 0 },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
