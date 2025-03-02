import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Challenge from "@/models/Challenge";

export async function POST(request) {
  try {
    await dbConnect();
    const { challengerUsername, challengerHighScore } = await request.json();

    if (!challengerUsername) {
      return NextResponse.json(
        { error: "Missing challengerUsername" },
        { status: 400 }
      );
    }

    const challenge = await Challenge.create({
      challenger: {
        username: challengerUsername,
        highScore: challengerHighScore || 0,
      },
    });

    return NextResponse.json(
      {
        message: "Challenge created",
        challengeId: challenge._id,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
