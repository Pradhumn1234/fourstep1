// src/utils/mongodb.js
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// let isConnected = false; // Track the connection status

// const dbConnect = async () => {
//   if (isConnected) {
//     console.log("Already connected to MongoDB");
//     return;
//   }
//   try {
//     const db = await mongoose.connect(MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     isConnected = db.connections[0].readyState === 1;
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };
// export default dbConnect;
import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // MongoDB connection (replace with your connection string)
      const client = await MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      const db = client.db('myDatabase');
      const collection = db.collection('industries');
      
      // Example: Insert new industry (adjust according to your logic)
      const result = await collection.insertOne(req.body);
      
      client.close();
      res.status(200).json({ message: 'Industry added successfully', result });
    } catch (error) {
      console.error('Error inserting industry:', error);
      res.status(500).json({ message: 'Failed to add industry', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

