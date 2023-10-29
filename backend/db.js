import mongoose from "mongoose";
import "dotenv/config";

const connectToDatabase = async () => {
  try {
    const connection = mongoose.connect(process.env.MONGODB_URI);
    if (connection) {
      console.log("Database connected successfully");
    }
  } catch (error) {
    console.log("Error connecting to database", error.message);
    throw error;
  }
};

export default connectToDatabase;
