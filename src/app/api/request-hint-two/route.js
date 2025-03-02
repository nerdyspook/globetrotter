import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import GameSession from "@/models/GameSession";
import CityQuiz from "@/models/CityQuiz";

export async function POST(request) {
  try {
    await dbConnect();
    const { sessionId } = await request.json();

    const session = await GameSession.findById(sessionId);
    if (!session || session.isOver) {
      return NextResponse.json(
        { error: "Session invalid or over" },
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

    qState.usedSecondHint = true;
    await session.save();

    // Maybe we want to return the second clue from city data or from some "hint2" field
    // We'll assume cityQuizDoc has a "hint2" or "clues[1]" if you prefer
    const cityQuizDoc = await CityQuiz.findById(qState.cityQuizId);
    const secondHint = cityQuizDoc.clues?.[1] || cityQuizDoc.hint2;

    return NextResponse.json({ hint2: secondHint });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
