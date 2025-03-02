"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/store/gameStore";
import Header from "@/components/custom/Header";
import toast, { Toaster } from "react-hot-toast";

export default function SaveProfilePage() {
  const { username, score } = useGameStore();
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      toast.error("Please enter a password!");
      return;
    }
    try {
      const res = await fetch("/api/register-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          highestScore: score,
        }),
      });
      if (!res.ok) throw new Error("Failed to save profile");
      await res.json();
      toast.success("Profile saved successfully!");
      router.push("/quiz");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <Header />
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-blue-500 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-neutral-900 rounded-lg shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-white mb-4 text-center">
            Save Your Profile
          </h1>
          <p className="text-gray-300 text-center mb-6">
            Register with a password to save your progress and high score.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A6FFF] text-white placeholder-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#4A6FFF] hover:bg-[#3A5FEF] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#32E0C4] text-lg"
            >
              Save Profile
            </button>
          </form>
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
