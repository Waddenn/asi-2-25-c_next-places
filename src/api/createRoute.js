import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

connectDB();

export const createRoute = (handler) => async (req, res) => {
  try {
    await handler(req, res);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
