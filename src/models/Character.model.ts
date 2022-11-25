import mongoose, { Schema } from "mongoose";

const characterSchema = new Schema({
  name: { type: String },
  image: { type: String },
  status: { type: String },
  species: { type: String },
  gender: { type: String },
  location: { type: String },
  comments: { type: Array },
});

const Character = mongoose.model("character", characterSchema);

export default Character;
