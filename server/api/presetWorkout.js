const router = require("express").Router();
const {
  models: { Workout, Exercise },
} = require("../db/");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const workouts = await Workout.findAll({
      where: {
        isPreset: true,
      },
      // include: [{ model: Exercise }],
    });
    res.send(workouts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(req.params.id, {
      where: {
        isPreset: true,
      },
      // include: [{ model: Exercise }],
    });
    if (workout.isPreset) {
      res.send(workout);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});
