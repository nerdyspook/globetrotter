import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import GameSession from "@/models/GameSession";
import CityQuiz from "@/models/CityQuiz";

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const sessionId = searchParams.get("sessionId");

    const session = await GameSession.findById(sessionId);
    if (!session || session.isOver) {
      return NextResponse.json(
        { error: "Invalid or finished session" },
        { status: 400 }
      );
    }

    const qIndex = session.questionIndex;
    const qState = session.questions[qIndex];
    if (!qState) {
      return NextResponse.json(
        { error: "No current question" },
        { status: 400 }
      );
    }

    const cityQuizDoc = await CityQuiz.findById(qState.cityQuizId);

    return NextResponse.json({
      checkpoint: session.checkpoint,
      questionIndex: qIndex,
      livesLeft: session.livesLeft,
      score: session.score,
      question: {
        cityQuizId: cityQuizDoc._id,
        prompt: cityQuizDoc.prompt,
        hint1: cityQuizDoc.clues?.[0] || cityQuizDoc.hint1, // or if you want separate hint fields
        options: cityQuizDoc.options,
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
