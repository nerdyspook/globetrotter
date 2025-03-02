import React from "react";

function QuizHeader({ username, score, livesLeft }) {
  return (
    <div className="max-w-4xl w-full mb-6">
      <div className="w-full bg-neutral-800 rounded-lg p-4 shadow-lg">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex items-center mb-2 md:mb-0">
            <div className="bg-[#4A6FFF] h-10 w-10 rounded-full flex items-center justify-center mr-3">
              <span id="user-initial" className="text-white font-bold text-lg">
                {username ? username.charAt(0).toUpperCase() : ""}
              </span>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Player</p>
              <h3 id="username-display" className="text-white font-medium">
                {username}
              </h3>
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm">Score</p>
              <p id="score-display" className="text-white font-bold text-xl">
                {score}
              </p>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">Lives</p>
              <p
                id="lives-display"
                className="text-[#FF6B6B] font-bold text-xl"
              >
                {livesLeft}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizHeader;
