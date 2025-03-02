"use client";

import { useRouter } from "next/navigation";
import { useGameStore } from "@/store/gameStore";
import Header from "@/components/custom/Header";
import toast, { Toaster } from "react-hot-toast";
import { useChallenge } from "@/hooks/useChallenge";

export default function ChallengePage() {
  const router = useRouter();
  const { username, score } = useGameStore();
  const { createAndShareChallenge } = useChallenge();

  const onChallengeClick = async () => {
    await createAndShareChallenge(score, username);
  };

  return (
    <>
      <Header />
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-blue-500 flex items-center justify-center p-4">
        <div className="max-w-xl w-full bg-neutral-900 rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-4 text-center">
            Challenge a Friend
          </h1>
          <p className="text-gray-300 text-lg text-center mb-6">
            Your final score is{" "}
            <span className="font-semibold text-[#32E0C4]">{score}</span>.
          </p>
          <button
            onClick={onChallengeClick}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
          >
            Challenge a Friend via WhatsApp
          </button>
          <div className="mt-6 text-center">
            <button
              onClick={() => router.push("/quiz")}
              className="text-blue-300 hover:text-blue-400 transition-colors"
            >
              Back to Quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
