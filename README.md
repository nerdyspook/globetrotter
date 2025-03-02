# Globetrotter – The Ultimate Travel Guessing Game

Globetrotter is an engaging, quiz-style web application where players test their global knowledge by guessing famous travel destinations from cryptic clues, fun facts, and trivia. With dynamic challenges, live feedback animations, and a "Challenge a Friend" feature, Globetrotter offers an immersive and competitive experience.

---

## Table of Contents

- [Core Features](#core-features)
- [Technology Stack](#technology-stack)
- [Architecture & Folder Structure](#architecture--folder-structure)
- [Setup & Installation](#setup--installation)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Dynamic OG Image Generation](#dynamic-og-image-generation)
- [Troubleshooting & Deployment Notes](#troubleshooting--deployment-notes)
- [Contributing](#contributing)
- [License](#license)

---

## Core Features

- **Interactive Quiz Flow:**

  - **Multiple-Choice Questions:** Players answer travel-based questions using multiple-choice options.
  - **Immediate Feedback:** Correct answers trigger confetti animations and display all related fun facts/trivia, while incorrect answers show a heartbreak animation.
  - **Checkpoints & Lives:** The quiz is segmented into checkpoints (e.g., 20 questions per checkpoint) with a starting total of 15 lives. Incorrect answers deduct lives, and a streak of 4 correct answers (without extra hints) awards an extra life.

- **Hints & Trivia:**

  - **Always Visible First Hint:** The first hint is always displayed for every question.
  - **Extra Hint Option:** A "Get More Hint" button calls an API for an additional hint.
  - **Comprehensive Trivia:** All fun facts related to the destination are displayed after a correct answer.

- **Challenge a Friend:**

  - **Challenge Creation:** Users can challenge friends by sharing their score via WhatsApp. A dynamic OG image is generated to show the challenger’s name and high score.
  - **Challenge Details Page:** When a friend clicks the shared link, they see the challenger’s details and can join the challenge by starting the quiz.

- **Profile Management:**
  - **Ephemeral Play:** Players can enjoy the game without registering.
  - **Save Profile:** Users have the option to save their profile (with a password) to retain their high score and progress across sessions.

---

## Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (with the new App Router)
- **Package Manager:** [PNPM](https://pnpm.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with [Tailwindcss-animate](https://www.npmjs.com/package/tailwindcss-animate) and Shadcn UI principles
- **State Management:** [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching:** Next.js built-in fetch API and [React Query](https://react-query.tanstack.com/) (if used)
- **Animations & Feedback:** [Framer Motion](https://www.framer.com/motion/), [react-confetti](https://www.npmjs.com/package/react-confetti), and [react-hot-toast](https://react-hot-toast.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) using [Mongoose](https://mongoosejs.com/)
- **Dynamic OG Image Generation:** [@vercel/og](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation)

**Additional Dependencies:**

- `@radix-ui/react-slot`
- `bcryptjs`
- `class-variance-authority`
- `clsx`
- `dotenv`
- `lucide-react`
- `tailwind-merge`

**Dev Dependencies:**

- `eslint`
- `eslint-config-next`
- `postcss`

---
