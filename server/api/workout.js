const router = require("express").Router();
const {
  models: { Workout, Exercise, WorkoutList, User },
} = require("../db/");
const { requireToken } = require("./middleware");

router.get("/", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });
    res.send(workout);
  } catch (error) {
    next(error);
  }
});

router.post('/', requireToken, async (req, res, next) => {
  try {

    const [workout, workoutCreated] = await Workout.findOrCreate({
      where: {
        userId: req.user.dataValues.id,
        status: 'active',
      },
      include: [Exercise],
    });

    const [exercise, exerciseCreated] = await WorkoutList.findOrCreate({
      where: {
        exerciseId: req.body.exerciseId,
        workoutId: workout.id
      }
    })

    res.send(
      await Workout.findOne({
        where: {
          id: workout.id
        },
        include: [Exercise]
      })
    )
  } catch(error) {
    next(error)
  }
})

module.exports = router;
