import { useState } from "react";

export function useChallenge() {
  const [challengeId, setChallengeId] = useState(null);

  // Use an environment variable for the base URL or fallback to window.location.origin
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (typeof window !== "undefined" && window.location.origin);

  // Create a challenge on the backend and return the challengeId
  async function createChallenge(finalScore, username) {
    const res = await fetch("/api/create-challenge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        challengerUsername: username,
        challengerHighScore: finalScore,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to create challenge");
    }
    const data = await res.json();
    setChallengeId(data.challengeId);
    return data.challengeId;
  }

  // Share the challenge via WhatsApp
  function shareChallenge(finalScore, challengeId) {
    // Ensure baseUrl is defined
    if (!baseUrl) {
      console.error("Base URL is not defined.");
      return;
    }
    const challengeLink = `${baseUrl}/challenge/${challengeId}`;
    const imageUrl = `${baseUrl}/api/challenge-image/${challengeId}`;
    const text = `I scored ${finalScore} in Globetrotter!\nCheck out my challenge image: ${imageUrl}\nJoin me here: ${challengeLink}`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  // Convenience function to create and immediately share the challenge
  async function createAndShareChallenge(finalScore, username) {
    try {
      const id = await createChallenge(finalScore, username);
      shareChallenge(finalScore, id);
    } catch (error) {
      console.error("Error creating and sharing challenge:", error);
    }
  }

  return {
    challengeId,
    createChallenge,
    shareChallenge,
    createAndShareChallenge,
  };
}
