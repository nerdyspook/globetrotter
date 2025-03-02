import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(request) {
  try {
    await dbConnect();
    const { username, password, highestScore } = await request.json();

    if (!username || !password) {
      return NextResponse.json(
        { error: "username & password required" },
        { status: 400 }
      );
    }

    const existing = await User.findOne({ username });
    if (existing) {
      return NextResponse.json(
        { error: "Username already taken" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      username,
      password: hashed,
      highestScore: highestScore || 0,
    });

    return NextResponse.json(
      {
        id: newUser._id,
        username: newUser.username,
        highestScore: newUser.highestScore,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
