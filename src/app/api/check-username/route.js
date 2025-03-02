import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/models/User";

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { error: "Missing username param" },
        { status: 400 }
      );
    }

    const existing = await User.findOne({ username });
    return NextResponse.json({ taken: !!existing });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
