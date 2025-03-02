import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import GameSession from "@/models/GameSession";
import CityQuiz from "@/models/CityQuiz";
import { shuffleArray } from "@/lib/utils";

export async function POST(request) {
  try {
    await dbConnect();

    // 1) Extract the username from the request
    const { username } = await request.json();
    if (!username) {
      return NextResponse.json(
        { error: "Username is required" },
        { status: 400 }
      );
    }

    // 2) Fetch docs for each checkpoint
    const docsC1 = await CityQuiz.find({ checkpoint: 1 });
    const docsC2 = await CityQuiz.find({ checkpoint: 2 });
    const docsC3 = await CityQuiz.find({ checkpoint: 3 });

    // 3) Shuffle each checkpoint array
    shuffleArray(docsC1);
    shuffleArray(docsC2);
    shuffleArray(docsC3);

    // 4) Pick the desired number from each checkpoint
    const selectedC1 = docsC1.slice(0, 20);
    const selectedC2 = docsC2.slice(0, 20);
    const selectedC3 = docsC3.slice(0, 10);

    const combined = [...selectedC1, ...selectedC2, ...selectedC3];

    // 6) Create question states for each doc
    const questionStates = combined.map((doc) => ({
      cityQuizId: doc._id,
      usedSecondHint: false,
      answered: false,
    }));

    // 7) Create one big session doc for all 50 questions
    const session = await GameSession.create({
      username,
      questionIndex: 0,
      livesLeft: 15,
      score: 0,
      isOver: false,
      correctStreak: 0,
      questions: questionStates,
      // We don't store 'checkpointNumber' – it's one session for all.
    });

    // 8) Return session info
    return NextResponse.json(
      {
        message: "Game started",
        sessionId: session._id.toString(),
        totalQuestions: questionStates.length, // should be 50
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("start-game error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
