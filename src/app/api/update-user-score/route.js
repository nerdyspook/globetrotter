import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function PATCH(request) {
  try {
    await dbConnect();
    const { username, newScore } = await request.json();

    if (!username) {
      return NextResponse.json({ error: "username required" }, { status: 400 });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    if (newScore > user.highestScore) {
      user.highestScore = newScore;
      await user.save();
    }

    return NextResponse.json({
      username: user.username,
      highestScore: user.highestScore,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
