export async function handleCreateChallenge(finalScore, user) {
  try {
    const res = await fetch("/api/create-challenge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        challengerUsername: user.username,
        challengerHighScore: finalScore,
      }),
    });
    if (!res.ok) {
      throw new Error("Failed to create challenge");
    }
    const data = await res.json();
    const challengeId = data.challengeId;

    // Build shareable links
    const challengeLink = `https://yourapp.com/challenge?challengeId=${challengeId}`;
    const imageUrl = `https://yourapp.com/api/challenge-image/${challengeId}`;

    // Build the WhatsApp share text
    const text = `I scored ${finalScore} in Globetrotter!\nCheck out my challenge image: ${imageUrl}\nJoin me here: ${challengeLink}`;

    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  } catch (error) {
    console.error("Error creating challenge:", error);
  }
}
