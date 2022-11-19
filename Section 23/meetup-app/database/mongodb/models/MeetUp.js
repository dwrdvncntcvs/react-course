import { Schema, model, models } from "mongoose";

const meetupSchema = new Schema({
  title: String,
  image: String,
  address: String,
  description: String,
});

export default models.MeetUp || model("MeetUp", meetupSchema);
