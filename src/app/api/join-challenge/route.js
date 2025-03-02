import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Challenge from "@/models/Challenge";

export async function PATCH(request) {
  try {
    await dbConnect();
    const { challengeId, username } = await request.json();

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

    const alreadyIn = challenge.participants.some(
      (p) => p.username === username
    );
    if (alreadyIn) {
      return NextResponse.json(
        { error: "User already joined" },
        { status: 400 }
      );
    }

    challenge.participants.push({ username });
    await challenge.save();

    return NextResponse.json({ message: "Joined challenge" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
