const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },

  exercise: [
    {
      type: String,
      trim: true,
      required: "Exercise type is Required"
    },
    {
      name: String,
      trim: true,
      required: "Exercise name is Required"
    },
    {
      duration: Number
    },
    {
      distance: Number
    },
    {
      weight: Number
    },
    {
      sets: Number
    },
    {
      reps: Number
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
