const router = require('express').Router();
const Workout = require('../models/workout');

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
    Workout.create({}).then(data => {
        console.log(data);
        res.json(data);
    }).catch(err => {
        res.json(err);
    })
});

router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(
        req.params.id,
        { $push: { exercises: req.body } },
    ).then((data) => {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate(
        // [
        //     { $match: {} },
        //     { $group: { day: "$day", total: { $sum: exercise[0]."$duration" } } }
        // ]
    )
        .sort({ day: -1 })
        .limit(7)
        .then((data) => {
            console.log(data);
            res.json(data);
        }).catch(err => {
            res.json(err);
        });
});

module.exports = router;