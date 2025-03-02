"use client";

import QuizOptions from "./QuizOptions";

export default function QuizQuestion({
  question,
  onAnswer,
  onHint,
  secondHint,
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        id="question-container"
        className="bg-neutral-800 rounded-lg p-6 shadow-2xl animate__animated animate__fadeIn"
      >
        {/* Question Number */}
        <div className="mb-6">
          <span className="bg-[#4A6FFF] text-white text-xs font-bold px-3 py-1 rounded-full">
            Question <span id="question-number">{question.number || 1}</span>
          </span>
        </div>

        {/* Question Prompt */}
        <h2
          id="question-text"
          className="text-2xl md:text-3xl font-bold text-white mb-8"
        >
          {question.prompt}
        </h2>

        {/* Options */}
        <div
          id="options-container"
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
        >
          <QuizOptions options={question.options} onSelect={onAnswer} />
        </div>

        {/* First Hint (always visible) */}
        <div id="hint-container" className="mb-8 bg-neutral-700 p-4 rounded-lg">
          <p className="text-gray-300">
            <span className="font-bold text-[#32E0C4]">Hint:</span>{" "}
            {question.hint1}
          </p>
        </div>

        {/* Extra Hint (visible if available) */}
        {secondHint && (
          <div
            id="extra-hint-container"
            className="mb-8 bg-neutral-700 p-4 rounded-lg"
          >
            <p className="text-gray-300">
              <span className="font-bold text-[#32E0C4]">Extra Hint:</span>{" "}
              {secondHint}
            </p>
          </div>
        )}

        {/* Action Button for More Hint */}
        <div className="flex justify-center">
          <button
            id="hint-button"
            onClick={onHint}
            className="bg-neutral-700 hover:bg-neutral-600 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#32E0C4]"
          >
            Get More Hint
          </button>
        </div>
      </div>
    </div>
  );
}
