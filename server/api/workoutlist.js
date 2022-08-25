const router = require("express").Router();
const {
  models: { Workout, Exercise, WorkoutList, User },
} = require("../db/");
const { requireToken } = require("./middleware");
module.exports = router;

// ALL PREVIOUS WORKOUTLISTS - closed and active
router.get("/", requireToken, async (req, res, next) => {
  try {
    const exerciseSet = await WorkoutList.findAll({
      where: {
        userId: req.user.dataValues.id,
      },
      order: [["createdAt", "DESC"]],
    });

    res.send(exerciseSet);
  } catch (err) {
    next(err);
  }
});

// ROUTE WITH CURRENT SET OF ALL EXERCISES IN MOST RECENT WORKOUT
router.get("/current/:id", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });

    const workoutlist = await WorkoutList.findAll({
      where: {
        workoutId: workout.id,
      },
    });
    res.send(workoutlist);
  } catch (err) {
    console.error(err);
  }
});

// MOST RECENT SET FOR SPECIFIC EXERCISE
router.get("/prev/:id", requireToken, async (req, res, next) => {
  try {
    let exerciseSet = await WorkoutList.findAll({
      where: {
        exerciseId: req.params.id,
        userId: req.user.dataValues.id,
      },
      order: [["createdAt", "DESC"]],
    });

    if (exerciseSet[0].sets.length === 0) {
      res.send(exerciseSet[1]);
    } else {
      res.send(exerciseSet[0]);
    }
  } catch (err) {
    next(err);
  }
});

// ALL PREVIOUS SETS FOR SPECIFIC EXERCISE
router.get("/:exerciseId", requireToken, async (req, res, next) => {
  try {
    let exerciseSet = await WorkoutList.findAll({
      where: {
        exerciseId: req.params.exerciseId,
        userId: req.user.dataValues.id,
      },
      order: [["createdAt", "DESC"]],
    });

    res.send(exerciseSet);
  } catch (err) {
    next(err);
  }
});

// UPDATES WORKOUT LIST SET
router.put("/:id", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });
    console.log("HELLLLOOOOO", workout);

    let exercise = await WorkoutList.findOne({
      where: {
        exerciseId: req.params.id,
        workoutId: workout.id,
      },
    });

    console.log("EXERCISE", exercise);
    exercise.dataValues.sets.push(req.body);
    console.log("what is req body", req.body);
    exercise.save();
    res.send(exercise);
    // res.send(
    //   await Workout.findOne({
    //     where: {
    //       userId: req.user.dataValues.id,
    //       status: "active",
    //     },
    //     include: [Exercise],
    //   })
    // );
  } catch (err) {
    next(err);
  }
});
