const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Workout must have a name"
  },
  type: {
    type: String,
    trim: true,
    required: "Workout must have a type"
  },
  weight: {
    type: Number,
    required: "You must enter the weight"
  },
  sets: {
    type: Number,
    required: "You must enter the number of sets"
  },
  reps: {
    type: Number,
    required: "You must enter the number of reps"
  },
  duration: {
    type: Number,
    required: "You must enter the duration"
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
