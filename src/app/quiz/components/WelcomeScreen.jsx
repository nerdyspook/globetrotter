import React from "react";

function WelcomeScreen({ username, score, livesLeft, onStartQuiz }) {
  return (
    <div className="max-w-3xl w-full mx-auto bg-neutral-900 rounded-lg shadow-2xl overflow-hidden">
      <div className="p-8">
        {/* Welcome Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-1">
            Welcome,{" "}
            <span id="player-name" className="text-[#32E0C4]">
              {username || "Player"}
            </span>
            !
          </h1>
          <p className="text-gray-300">
            Let&apos;s get you ready for the quiz challenge
          </p>
        </div>
        {/* Score and Lives Cards */}
        <div className="mb-8 flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-neutral-800 p-5 rounded-lg flex-1">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#4A6FFF]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white">Your Score</h3>
            </div>
            <div className="bg-neutral-700 p-4 rounded-md text-center">
              <span className="text-4xl font-bold text-white">{score}</span>
              <p className="text-gray-300 text-sm mt-1">Starting Points</p>
            </div>
          </div>
          <div className="bg-neutral-800 p-5 rounded-lg flex-1">
            <div className="flex items-center justify-center gap-3 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#FF6B6B]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white">Lives Left</h3>
            </div>
            <div className="bg-neutral-700 p-4 rounded-md text-center">
              <span className="text-4xl font-bold text-white">{livesLeft}</span>
              <p className="text-gray-300 text-sm mt-1">Total Lives</p>
            </div>
          </div>
        </div>
        {/* Start Quiz Button */}
        <div className="text-center mb-8">
          <button
            id="start-quiz-button"
            onClick={onStartQuiz}
            className="bg-[#4A6FFF] hover:bg-[#3A5FEF] text-white font-bold py-4 px-10 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#32E0C4] text-lg"
          >
            Start Quiz
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 inline-block ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
        {/* Quiz Rules */}
        <div className="bg-neutral-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[#32E0C4] mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Quiz Rules
          </h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#4A6FFF] mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>
                You have{" "}
                <span className="font-medium text-white px-1">15 lives</span> to
                complete the quiz.
              </p>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#4A6FFF] mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>
                Each correct answer earns you{" "}
                <span className="font-medium text-white pl-1">1 point</span>.
              </p>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#4A6FFF] mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>
                Each wrong answer costs you{" "}
                <span className="font-medium text-white pl-1">1 life</span>.
              </p>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#4A6FFF] mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>
                You can use the{" "}
                <span className="font-medium text-white">
                  &quot;Give More Hint&quot;
                </span>{" "}
                button if you&apos;re stuck.
              </p>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#4A6FFF] mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>
                The quiz has{" "}
                <span className="font-medium text-white">3 checkpoints</span> -
                reach them all to win!
              </p>
            </li>
            <li className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#4A6FFF] mr-2 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>If you lose all your lives, the quiz ends.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WelcomeScreen;
