const router = require("express").Router();
const {
  models: { Workout, Exercise, WorkoutList, User, Sprite },
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

// router.get('/previous', requireToken, async (req, res, next) => {
//   try {
//     const workout = await Workout.findOne({
//       where: {
//         userId: req.user.dataValues.id,
//         status: 'closed',
//       },
//       order: [ [ 'createdAt', 'DESC' ]],
//       include: [Exercise],

//     });
//     res.send(workout);
//   } catch (error) {
//     next(error);
//   }
// });

router.put("/finish", requireToken, async (req, res, next) => {
  try {
    const current = await Workout.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });
    current.update({
      status: "closed",
    });

    const currentWeightLifted = current.workoutTotalWeight;
    const user = await User.findByPk(req.user.dataValues.id);
    await user.update({ totalWeight: totalWeight + currentWeightLifted });
    const newTotal = user.totalWeight;
    if (newTotal >= 1000) {
      cuteGirl.setUser(user);
    }
    if(newTotal >= 2000){
      user.addSprite(adventureBoy);
    }
    if(newTotal >= 4000){
      user.addSprite(zombie);
    }
    if(newTotal >= 8000){
      user.addSprite(ninjaGirl);
    }
    if(newTotal >= 16000){
      user.addSprite(jackOLantern);
    }
    if(newTotal >= 32000){
      user.addSprite(ninjaBoy);
    }
    if(newTotal >= 64000){
      user.addSprite(adventureGirl);
    }
    if(newTotal >= 128000){
      user.addSprite(dino);
    }
    if(newTotal >= 256000){
      user.addSprite(robot);
    }
    if(newTotal >= 512000){
      user.addSprite(santa);
    }
    if(newTotal >= 1024000){
      user.addSprite(knight);
    }

    res.send(current);
  } catch (error) {
    next(error);
  }
});

router.post("/", requireToken, async (req, res, next) => {
  try {
    const [workout, workoutCreated] = await Workout.findOrCreate({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });

    const [exercise, exerciseCreated] = await WorkoutList.findOrCreate({
      where: {
        exerciseId: req.body.exerciseId,
        workoutId: workout.id,
      },
    });
    console.log("EXERCISE", exercise);
    console.log("EXERCISE CREATED", exerciseCreated);
    exercise.sets = [{ reps: "", weight: "", setId: 0 }];
    await exercise.save();

    res.send(workout);
  } catch (error) {
    next(error);
  }
});

router.get("/preset", async (req, res, next) => {
  try {
    const workouts = await Workout.findAll({
      where: {
        isPreset: true,
      },
      include: [{ model: Exercise }],
    });
    res.send(workouts);
  } catch (error) {
    next(error);
  }
});

router.get("/preset/:id", async (req, res, next) => {
  try {
    const workout = await Workout.findByPk(req.params.id, {
      where: {
        isPreset: true,
      },
      include: [{ model: Exercise }],
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
module.exports = router;
