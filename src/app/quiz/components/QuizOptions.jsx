"use client";

export default function QuizOptions({ options, onSelect }) {
  return (
    <>
      {options.map((option, index) => {
        // Convert index to a letter (A, B, C, etc.)
        const letter = String.fromCharCode(65 + index);
        return (
          <button
            key={index}
            onClick={() => onSelect(option)}
            className="option-btn bg-neutral-700 hover:bg-neutral-600 text-white p-4 rounded-lg transition-all duration-200 text-left"
          >
            <span className="inline-block w-8 h-8 bg-neutral-600 rounded-full text-center leading-8 mr-3">
              {letter}
            </span>
            {option}
          </button>
        );
      })}
    </>
  );
}
