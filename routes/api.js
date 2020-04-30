const router = require("express").Router();
const mongojs = require("mongojs");

// TODO: import required model/s
const Workout = require("../models/workout");

// TODO: and add code to the routes so that the app functions correctly

// Creates a workout using data in the request body.
router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Respond with workout for id url parameter. This should
// respond with the updated workout json
router.put("/api/workouts/:id", (req, res) => {
  console.log(req.body);
  Workout.update(
    { _id: mongojs.ObjectId(req.params.id) },
    { $set: req.body },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    }
  );
});

// Respond with json for all the workouts in an array.
router.get("/api/workouts", (req, res) => {
  Workout.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Respond with json array containing the last 7 workouts
router.get("/api/workouts/range", (req, res) => {
  Workout.find().limit(7, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Delete workout with id matching id in the request body.
router.delete("/api/workouts/:id", (req, res) => {
  Workout.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
