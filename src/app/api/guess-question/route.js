import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import GameSession from "@/models/GameSession";
import CityQuiz from "@/models/CityQuiz";
import { shuffleArray } from "@/lib/utils";

export async function POST(request) {
  try {
    await dbConnect();

    const { sessionId, selectedOption } = await request.json();

    const session = await GameSession.findById(sessionId);
    if (!session || session.isOver) {
      return NextResponse.json(
        { error: "Invalid or finished session" },
        { status: 400 }
      );
    }

    const qIndex = session.questionIndex;
    const qState = session.questions[qIndex];
    if (!qState || qState.answered) {
      return NextResponse.json(
        { error: "No current question or already answered" },
        { status: 400 }
      );
    }

    const cityQuizDoc = await CityQuiz.findById(qState.cityQuizId);
    if (!cityQuizDoc) {
      return NextResponse.json(
        { error: "Question not found" },
        { status: 404 }
      );
    }

    // Check correctness
    const isCorrect = selectedOption === cityQuizDoc.correctAnswer;

    let funFacts = null;
    let trivia = null;

    if (isCorrect) {
      // partial or full points
      const points = qState.usedSecondHint ? 5 : 10;
      session.score += points;

      funFacts = cityQuizDoc.fun_fact; // or cityQuizDoc.funFacts
      trivia = cityQuizDoc.trivia;

      // Streak logic
      if (!qState.usedSecondHint) {
        session.correctStreak += 1;
      } else {
        session.correctStreak = 0;
      }

      if (session.correctStreak >= 4) {
        if (session.livesLeft < 15) {
          session.livesLeft += 1;
        }
        session.correctStreak = 0;
      }

      qState.answered = true;
    } else {
      // wrong => lose a life
      session.livesLeft -= 1;
      if (session.livesLeft < 0) session.livesLeft = 0;
      session.correctStreak = 0;

      qState.answered = true;
    }

    // Move to the next question
    session.questionIndex += 1;

    // Check if game is over
    if (
      session.livesLeft <= 0 ||
      session.questionIndex >= session.questions.length
    ) {
      session.isOver = true;
    }

    await session.save();

    let nextQuestion = null;
    if (!session.isOver) {
      // We still have a question to serve
      const nextQState = session.questions[session.questionIndex];
      if (nextQState) {
        const nextDoc = await CityQuiz.findById(nextQState.cityQuizId);
        if (nextDoc) {
          // Shuffle the options array so the correct answer isn't always first
          const shuffledOptions = shuffleArray([...nextDoc.options]);

          nextQuestion = {
            cityQuizId: nextDoc._id,
            prompt: nextDoc.prompt,
            hint1: nextDoc.clues?.[0] || nextDoc.hint1,
            options: shuffledOptions,
          };
        }
      }
    }

    return NextResponse.json({
      isCorrect,
      funFacts: isCorrect ? funFacts : null,
      trivia: isCorrect ? trivia : null,
      updatedScore: session.score,
      updatedLives: session.livesLeft,
      isGameOver: session.isOver,
      nextQuestion,
    });
  } catch (error) {
    console.error("guess-question error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
