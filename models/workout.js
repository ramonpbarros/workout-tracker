const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },

    exercise: [
      {
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
        duration: {
          type: Number,
          required: "Duration name is Required"
        },
        distance: {
          type: Number
        },
        weight: {
          type: Number
        },
        sets: {
          type: Number
        },
        reps: {
          type: Number
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

WorkoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((toal, exercise) => {
    return total + exercise.duration;
  }, 0);
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
