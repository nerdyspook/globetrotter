import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Challenge from "@/models/Challenge";

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { challengeId } = params;

    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      return NextResponse.json(
        { error: "Challenge not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ challenge });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
