const router = require("express").Router();

// TODO: import required model/s
const db = require("../models");

// TODO: and add code to the routes so that the app functions correctly

// Creates a workout using data in the request body.
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
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
  db.Workout.update({ _id: req.params.id }, { $set: req.body }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Respond with json for all the workouts in an array.
router.get("/api/workouts", (req, res) => {
  db.Workout.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

// Respond with json array containing the last 7 workouts
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find()
    .sort({ day: -1 })
    .limit(7, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    });
});

// Delete workout with id matching id in the request body.
router.delete("/api/workouts/:id", (req, res) => {
  db.Workout.remove({ _id: req.params.id }, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
