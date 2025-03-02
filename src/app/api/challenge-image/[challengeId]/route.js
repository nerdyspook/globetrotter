import { ImageResponse } from "@vercel/og";
import dbConnect from "@/lib/mongodb";
import Challenge from "@/models/Challenge";

export const runtime = "nodejs"; // using Node runtime for Mongoose calls

export async function GET(request, { params }) {
  try {
    // 1) connect DB
    await dbConnect();

    // 2) get challenge doc
    const challengeId = params.challengeId;
    const challenge = await Challenge.findById(challengeId);
    if (!challenge) {
      // Return a fallback image if not found
      return new ImageResponse(
        (
          <div
            style={{
              display: "flex", // Must use display:flex if multiple child nodes
              width: "100%",
              height: "100%",
              background: "white",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
            }}
          >
            Challenge Not Found
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      );
    }

    // 3) retrieve the challenger info
    const { username, highScore } = challenge.challenger;

    // 4) build the dynamic image
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex", // parent container
            flexDirection: "column", // for vertical stacking
            width: "100%",
            height: "100%",
            background: "#222",
            color: "#fff",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "sans-serif",
          }}
        >
          <div
            style={{
              display: "flex", // must be flex if it has text plus embedded expressions
              fontSize: 60,
              marginBottom: 20,
            }}
          >
            Challenge by {username}
          </div>
          <div
            style={{
              display: "flex", // again, must be flex
              fontSize: 40,
            }}
          >
            Score to Beat: {highScore}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.error("Challenge Image Error:", error);

    // fallback image on error
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            fontSize: 40,
            background: "white",
            width: "100%",
            height: "100%",
            color: "black",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Error Generating Image
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}
