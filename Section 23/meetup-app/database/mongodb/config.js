import mongoose, { connect } from "mongoose";

const MONGODB_URI =
  "mongodb+srv://mongoAdmin:Pizza143@cluster0.wicwvkr.mongodb.net/?retryWrites=true&w=majority";

async function dbConnect() {
  return await mongoose.connect(MONGODB_URI);
}

export default dbConnect;
