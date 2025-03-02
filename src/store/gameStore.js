import { create } from "zustand";

const useGameStore = create((set) => ({
  username: "",
  sessionId: "",
  score: 0,
  livesLeft: 15,
  correctStreak: 0,
  setUsername: (username) => set({ username }),
  setSessionId: (id) => set({ sessionId: id }),
  updateScore: (points) => set({ score: Number(points) }),
  updateLives: (lives) => set({ livesLeft: lives }),
  setCorrectStreak: (streak) => set({ correctStreak: streak }),
  resetGame: () =>
    set({
      username: "",
      sessionId: "",
      score: 0,
      livesLeft: 15,
      correctStreak: 0,
    }),
}));

export { useGameStore };
