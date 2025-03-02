import "dotenv/config";
import dbConnect from "../lib/mongodb.js";
import CityQuiz from "../models/CityQuiz.js";
import citiesQuizData from "../data/cities-quiz.js";

async function seedCityQuiz() {
  try {
    await dbConnect();
    console.log("Connected to MongoDB for seeding CityQuiz data...");

    await CityQuiz.deleteMany({});
    console.log("Old CityQuiz docs cleared.");

    await CityQuiz.insertMany(citiesQuizData);
    console.log("CityQuiz seeding complete!");

    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

seedCityQuiz();
