import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  title: String,
  date: String,
  link: String,
});

const Event = model("Event", eventSchema);

export default Event;
