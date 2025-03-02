"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/custom/Header";
import toast, { Toaster } from "react-hot-toast";

export default function ChallengeDetailsPage({ params }) {
  const { challengeId } = params;
  const router = useRouter();
  const [challenge, setChallenge] = useState(null);

  useEffect(() => {
    if (challengeId) {
      fetchChallengeDetails(challengeId);
    }
  }, [challengeId]);

  async function fetchChallengeDetails(challengeId) {
    try {
      const res = await fetch(`/api/get-challenge/${challengeId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch challenge details");
      }
      const data = await res.json();
      setChallenge(data.challenge);
    } catch (error) {
      toast.error(error.message);
    }
  }

  function handleJoinChallenge() {
    // Redirect friend to the quiz page to play the challenge
    router.push("/quiz");
  }

  return (
    <>
      <Header />
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-blue-500 flex items-center justify-center p-4">
        {challenge ? (
          <div className="max-w-xl w-full bg-neutral-900 rounded-lg shadow-2xl p-8">
            <h1 className="text-3xl font-bold text-white mb-4 text-center">
              Challenge Details
            </h1>
            <p className="text-gray-300 text-lg text-center mb-4">
              Challenger:{" "}
              <span className="font-semibold text-[#32E0C4]">
                {challenge.challenger.username}
              </span>
            </p>
            <p className="text-gray-300 text-lg text-center mb-6">
              High Score:{" "}
              <span className="font-semibold text-[#32E0C4]">
                {challenge.challenger.highScore}
              </span>
            </p>
            <button
              onClick={handleJoinChallenge}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg"
            >
              Join Challenge &amp; Play
            </button>
          </div>
        ) : (
          <p className="text-white text-xl">Loading challenge details...</p>
        )}
      </div>
    </>
  );
}
