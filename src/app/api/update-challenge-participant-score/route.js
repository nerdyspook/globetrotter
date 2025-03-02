import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Challenge from "@/models/Challenge";

export async function POST(request) {
  try {
    await dbConnect();
    const { challengeId, username, finalScore } = await request.json();

    if (!challengeId || !username) {
      return NextResponse.json(
        { error: "Missing challengeId or username" },
        { status: 400 }
      );
    }

    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 }
      );
    }

    const participant = challenge.participants.find(
      (p) => p.username === username
    );
    if (!participant) {
      return NextResponse.json(
        { error: "User not in challenge" },
        { status: 400 }
      );
    }

    participant.finalScore = finalScore || 0;
    participant.done = true;

    await challenge.save();

    return NextResponse.json({
      message: "Participant score updated",
      participants: challenge.participants,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
