"use client";

export default function Badge({ rankName }) {
  return (
    <div className="flex items-center justify-center bg-yellow-400 rounded-full w-24 h-24 shadow-lg">
      <span className="text-xl font-bold text-white">{rankName}</span>
    </div>
  );
}
