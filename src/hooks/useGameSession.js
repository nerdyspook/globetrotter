export function useGameSession() {
  // Start a new game session and return the sessionId
  async function startGame(username) {
    const res = await fetch("/api/start-game", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });
    const data = await res.json();
    return data.sessionId;
  }

  // Fetch the next question using the current sessionId
  async function fetchNextQuestion(sessionId) {
    const res = await fetch(`/api/get-next-question?sessionId=${sessionId}`);
    const data = await res.json();
    return data.question;
  }

  // Submit an answer and return the result
  async function submitAnswer(sessionId, selectedOption) {
    const res = await fetch("/api/guess-question", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, selectedOption }),
    });
    const data = await res.json();
    return data;
  }

  // Request the second hint for the current question
  async function requestHintTwo(sessionId) {
    const res = await fetch("/api/request-hint-two", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
    });
    const data = await res.json();
    return data.hint2;
  }

  return { startGame, fetchNextQuestion, submitAnswer, requestHintTwo };
}
