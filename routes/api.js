const router = require("express").Router();
const Workout = require("../models/workout.js");



router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .sort({ date: -1 })
        .then(workouts => {
            res.json(workouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.post('/api/workouts', (req, res) => {
    Workout.create({})
        .then(newWorkout => {
            console.log(newWorkout);
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.put('/api/workouts/:id', (req, res) => {
    //Update the workout with the id that is passed in via the req.params
    //Update the workout by adding a new exercise that is in the req.body
})

module.exports = router;
