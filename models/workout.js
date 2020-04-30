const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Exercise type is Required"
  },

  name: {
    type: String,
    trim: true,
    required: "Exercise name is Required"
  },

  distance: {
    type: Number,
    trim: true,
    required: "Distance is Required"
  },

  duration: {
    type: Number,
    trim: true,
    required: "Duration is Required"
  },

  weight: {
    type: Number,
    trim: true,
    required: "Weight is Required"
  },

  sets: {
    type: Number,
    trim: true,
    required: "Sets is Required"
  },

  reps: {
    type: Number,
    trim: true,
    required: "Reps is Required"
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
