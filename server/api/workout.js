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

router.get("/all", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findAll({
      where: {
        userId: req.user.dataValues.id,
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
    console.log("current workout finish", current);
    current.update({
      status: "closed",
    });

    // const currentWeightLifted = current.workoutTotalWeight;
    // console.log("current weight lifted", currentWeightLifted);
    // const user = await User.findByPk(req.user.dataValues.id);
    // await user.update({ totalWeight: totalWeight + currentWeightLifted });
    // const newTotal = user.totalWeight;
    // if (newTotal >= 1000) {
    //   cuteGirl.setUser(user);
    // }
    // if (newTotal >= 2000) {
    //   adventureBoy.setUser(user);
    // }
    // if (newTotal >= 4000) {
    //   zombie.setUser(user);
    // }
    // if (newTotal >= 8000) {
    //   ninjaGirl.setUser(user);
    // }
    // if (newTotal >= 16000) {
    //   jackOLantern.setUser(user);
    // }
    // if (newTotal >= 32000) {
    //   ninjaBoy.setUser(user);
    // }
    // if (newTotal >= 64000) {
    //   adventureGirl.setUser(user);
    // }
    // if (newTotal >= 128000) {
    //   dino.setUser(user);
    // }
    // if (newTotal >= 256000) {
    //   robot.setUser(user);
    // }
    // if (newTotal >= 512000) {
    //   santa.setUser(user);
    // }
    // if (newTotal >= 1024000) {
    //   knight.setUser(user);
    // }

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
    exercise.userId = req.user.dataValues.id;
    exercise.sets = [{ reps: "", weight: "", setId: 0 }];
    await exercise.save();

    res.send(workout);
  } catch (error) {
    next(error);
  }
});

// MAKE A PRESET WORKOUT YOUR CURRENT WORKOUT
router.post("/:id/add", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findOrCreate({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      }
    })

    if (!workout) {
      let preset = await Workout.findOne({
        where: {
          id: req.params.id
        },
        raw: true
      })

      delete preset.id;
      let newWorkout = await Workout.create(preset)

      res.send(newWorkout)
    } else {
      console.log('FINISH THE WORKOUT THAT YOU STARTED!!!')
    }
  } catch (error) {
    next (error)
  }
})

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
