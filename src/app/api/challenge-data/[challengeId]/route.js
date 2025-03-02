import dbConnect from "@/lib/mongodb";
import Challenge from "@/models/Challenge";

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { challengeId } = params;
    // Use lean() so the result is a plain JS object.
    const challenge = await Challenge.findById(challengeId).lean();
    if (!challenge) {
      return new Response(JSON.stringify({ error: "Challenge not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(challenge), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
