import mongoose, { connect } from "mongoose";

const MONGODB_URI = "mongodb://localhost/next_db";

async function dbConnect() {
  return await mongoose.connect(MONGODB_URI);
}

export default dbConnect;
