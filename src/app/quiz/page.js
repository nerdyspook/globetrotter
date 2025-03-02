"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/store/gameStore";
import { useGameSession } from "@/hooks/useGameSession";
import QuizQuestion from "@/app/quiz/components/QuizQuestion";
import Modal from "@/components/custom/Modal";
import Badge from "@/components/custom/Badge";
import WelcomeScreen from "@/app/quiz/components/WelcomeScreen";
import QuizHeader from "@/app/quiz/components/QuizHeader";

const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false });
const DynamicHeartBreakAnimation = dynamic(
  () => import("./components/HeartBreakAnimation"),
  { ssr: false }
);
const DynamicStreakAnimation = dynamic(
  () => import("./components/StreakAnimation"),
  { ssr: false }
);

export default function QuizPage() {
  const router = useRouter();
  const {
    username,
    sessionId,
    setSessionId,
    updateScore,
    updateLives,
    score,
    livesLeft,
    correctStreak,
    setCorrectStreak,
    resetGame,
  } = useGameStore();

  // If no username, redirect home
  useEffect(() => {
    if (!username) {
      router.push("/");
    }
  }, [username, router]);

  const [showConfetti, setShowConfetti] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [secondHint, setSecondHint] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);

  const { startGame, fetchNextQuestion, submitAnswer, requestHintTwo } =
    useGameSession();

  // We might want to just map question # to checkpoint #:
  //   1 <= questionNumber <= 20 => checkpoint = 1
  //   21 <= questionNumber <= 40 => checkpoint = 2
  //   41 <= questionNumber <= 50 => checkpoint = 3
  const getCheckpointFromQNum = (num) => {
    if (num <= 20) return 1;
    if (num <= 40) return 2;
    return 3;
  };

  // Start the single big session
  const startQuiz = async () => {
    try {
      if (!username) return;
      updateScore(0);
      const newSessionId = await startGame(username); // fetch 50 questions
      setSessionId(newSessionId);
      setIsGameStarted(true);

      // fetch the first question
      const question = await fetchNextQuestion(newSessionId);
      setQuestionNumber(1);
      setCurrentQuestion({ ...question, number: 1 });
      setSecondHint("");
    } catch (error) {
      console.error("Error starting quiz:", error);
    }
  };

  const handleHint = useCallback(async () => {
    try {
      if (sessionId) {
        const hint = await requestHintTwo(sessionId);
        setSecondHint(hint);
      }
    } catch (error) {
      console.error("Error fetching second hint:", error);
    }
  }, [sessionId, requestHintTwo]);

  const handleAnswer = async (selectedOption) => {
    try {
      const data = await submitAnswer(sessionId, selectedOption);
      setModalContent(null);

      if (data.isCorrect) {
        updateScore(data.updatedScore);
        updateLives(data.updatedLives);
        setCorrectStreak(correctStreak + 1);

        const currentStreak = correctStreak + 1;

        if (currentStreak === 4) {
          setModalContent(
            <div className="max-w-xl w-full bg-emerald-100 rounded-lg p-8 flex flex-col items-center space-y-4">
              <DynamicStreakAnimation />
              <p className="text-lg text-green-700 font-semibold text-center">
                Amazing! You&apos;re on fire and earned an extra life! (Max
                lives: 15)
              </p>
            </div>
          );
          setCorrectStreak(0);
        } else {
          setModalContent(
            <div className="max-w-xl w-full bg-emerald-100 rounded-lg p-8 text-center">
              <p className="text-2xl font-bold text-emerald-900">Correct!</p>
              {data.trivia && data.trivia.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {data.trivia.map((fact, index) => (
                    <li key={index} className="text-sm text-emerald-700">
                      {fact}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        }
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      } else {
        // Wrong answer
        setCorrectStreak(0);
        updateLives(data.updatedLives);
        setModalContent(
          <div className="flex flex-col items-center space-y-4">
            <DynamicHeartBreakAnimation />
            <p className="text-2xl font-bold text-red-500">
              Oops! Wrong answer. You lost a life.
            </p>
          </div>
        );
      }

      // Check if user ran out of lives or finished all 50
      if (data.isGameOver) {
        // Show final or partial end screen
        setModalContent(
          <div className="flex flex-col items-center space-y-4">
            <p className="text-2xl font-bold text-white">
              Game Over! You answered {questionNumber} questions.
            </p>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => router.push("/challenge/create")}
                className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-all duration-300"
              >
                Challenge a Friend
              </button>
              <button
                onClick={() => router.push("/save-profile")}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all duration-300"
              >
                Save Profile
              </button>
            </div>
          </div>
        );
      } else if (data.nextQuestion) {
        // Not game-over, so move to next question
        const newQuestionNum = questionNumber + 1;

        // If user is about to move from Q #20 -> #21 => checkpoint 1 done
        // Or from Q #40 -> #41 => checkpoint 2 done
        if (newQuestionNum === 21 || newQuestionNum === 41) {
          // Show a 'checkpoint complete' modal
          const checkpointJustFinished = newQuestionNum === 21 ? 1 : 2;
          setModalContent(
            <div className="flex flex-col items-center space-y-4 text-white">
              <p className="text-2xl font-semibold">
                Checkpoint {checkpointJustFinished} Complete!
              </p>
              <p>
                You can Challenge a Friend or Save Profile, or just continue
                playing.
              </p>
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => router.push("/challenge/create")}
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-all"
                >
                  Challenge a Friend
                </button>
                <button
                  onClick={() => router.push("/save-profile")}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-all"
                >
                  Save Profile
                </button>
                <button
                  onClick={() => {
                    // just close the modal
                    setModalOpen(false);
                  }}
                  className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all"
                >
                  Continue
                </button>
              </div>
            </div>
          );
        }

        // Update the questionNumber and the next question
        setQuestionNumber(newQuestionNum);
        setCurrentQuestion({ ...data.nextQuestion, number: newQuestionNum });
        setSecondHint("");
      }

      setModalOpen(true);
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-blue-500 p-4 flex flex-col items-center justify-center">
        {!isGameStarted ? (
          <WelcomeScreen
            username={username}
            score={score}
            livesLeft={livesLeft}
            onStartQuiz={startQuiz}
          />
        ) : (
          <>
            <QuizHeader
              username={username}
              score={score}
              livesLeft={livesLeft}
            />
            {currentQuestion && (
              <QuizQuestion
                question={currentQuestion}
                onAnswer={handleAnswer}
                onHint={handleHint}
                secondHint={secondHint}
              />
            )}
          </>
        )}
      </div>

      {showConfetti && <ReactConfetti />}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Game Update"
      >
        {modalContent}
      </Modal>
    </>
  );
}
