const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require('path');

// router.get("/exercise", async (req, res) => {
//     res.sendFile('public/exercise.html');
// });
// router.get('/exercise', (req, res) => res.sendFile(path.join(__dirname, 'public/exercise.html')));


// router.post("/api/transaction", ({ body }, res) => {
//   Transaction.create(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

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

// router.get("/stats", (req, res) => {
//     res.send(stats.html);
// });

module.exports = router;
