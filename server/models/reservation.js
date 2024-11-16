import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  prix: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});
const reservation = mongoose.model("reservation", NoteSchema);
export default reservation;
