import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import CityQuiz from "@/models/CityQuiz";

export async function GET() {
  try {
    await dbConnect();
    const data = await CityQuiz.find({});
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
