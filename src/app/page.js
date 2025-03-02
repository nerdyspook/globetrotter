"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/store/gameStore";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const router = useRouter();
  // Destructure resetGame along with setUsername
  const { setUsername: setStoreUsername, resetGame } = useGameStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      toast.error("Please enter a valid username!");
      return;
    }
    // Reset the store before starting a new game
    resetGame();
    setStoreUsername(username.trim());
    toast.success(`Welcome, ${username.trim()}!`);
    router.push("/quiz");
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-400 overflow-hidden pt-20 flex items-center justify-center">
        <motion.div
          className="max-w-md w-full mx-auto bg-neutral-800 rounded-lg shadow-2xl overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8">
            {/* Header */}
            <motion.div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">
                Globe<span className="text-[#32E0C4]">Trotter</span>
              </h1>
              <p className="text-gray-300">
                Begin your journey around the world!
              </p>
            </motion.div>
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {/* Username Input */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Enter Your username
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your username"
                  autoComplete="off"
                  className="w-full px-4 py-3 bg-neutral-700 border border-neutral-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4A6FFF] text-white placeholder-gray-400"
                />
              </motion.div>
              {/* Submit Button */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-[#4A6FFF] hover:bg-[#3A5FEF] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#32E0C4] text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Start Quiz
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
          {/* Footer */}
          <div className="bg-neutral-700 px-8 py-4">
            <p className="text-center text-sm text-gray-300">
              Ready to test your global knowledge? Enter your username and click
              Start!
            </p>
          </div>
        </motion.div>
      </div>
      <Toaster />
    </>
  );
}
