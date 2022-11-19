import { Schema, model, models } from "mongoose";

const meetupSchema = new Schema({
  title: String,
  image: String,
  address: String,
  description: String,
});

const MeetUp = models.MeetUp || model("MeetUp", meetupSchema);

export default MeetUp;
