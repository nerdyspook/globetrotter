Globetrotter – The Ultimate Travel Guessing Game
Globetrotter is a fun and engaging quiz-style web application where users guess famous travel destinations based on cryptic clues, hints, fun facts, and trivia. With features such as dynamic challenges, live feedback animations, and a friendly "Challenge a Friend" functionality, Globetrotter offers an immersive experience that tests and rewards your global knowledge!

Core Features
Interactive Quiz Flow:

Multiple-Choice Questions: Users answer questions based on travel clues, hints, and trivia.
Immediate Feedback: Correct answers trigger confetti animations and reveal fun facts; wrong answers display a heartbreak animation.
Checkpoints & Lives: The game is divided into checkpoints (e.g., 20 questions per checkpoint) with 15 lives total. Wrong answers deduct lives and 4 consecutive correct answers (without extra hints) award an extra life.
Hints & Trivia:

First Hint: The first hint is always visible.
Extra Hint: A "Get More Hint" button calls the backend API for an additional hint.
Fun Facts: Display all fun facts/trivia related to the destination after a correct answer.
Challenge a Friend:

Challenge Creation: Users can challenge friends by sharing a dynamic challenge link via WhatsApp.
Dynamic OG Image: A dynamic image is generated (using Next.js OG image generation) that shows the challenger’s name and high score.
Challenge Details Page: When a friend clicks the shared link, they can see the challenger’s details and join the challenge by playing the quiz.
Profile Management:

Ephemeral Play: Users can play without registering.
Save Profile: Users have the option to save their profile by setting a password, preserving their high score for future sessions.

API Endpoints
POST /api/start-game:
Starts a new game session with the provided username.

GET /api/get-next-question?sessionId=...:
Retrieves the next question for the game session.

POST /api/guess-question:
Submits an answer and returns updated score, lives, and question data.

POST /api/request-hint-two:
Returns an extra hint for the current question.

POST /api/create-challenge:
Creates a new challenge with the final score and returns a challengeId.

GET /api/get-challenge/[challengeId]:
Retrieves challenge details for a given challengeId.

GET /api/challenge-image/[challengeId]:
Dynamically generates an OG image for sharing the challenge.
