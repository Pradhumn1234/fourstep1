// src/utils/mongodb.js
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let isConnected = false; // Track the connection status

const dbConnect = async () => {
  if (isConnected) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    const db = await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
export default dbConnect;
