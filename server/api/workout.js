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
    await current.update({
      status: "closed",
    });

    const cuteGirl = await Sprite.findOne({ where: { name: "cuteGirl" } });
    const adventureBoy = await Sprite.findOne({
      where: { name: "adventureBoy" },
    });
    const zombie = await Sprite.findOne({ where: { name: "zombie" } });
    const ninjaGirl = await Sprite.findOne({ where: { name: "ninjaGirl" } });
    const jackOLantern = await Sprite.findOne({
      where: { name: "jackOLantern" },
    });
    const ninjaBoy = await Sprite.findOne({ where: { name: "ninjaBoy" } });
    const adventureGirl = await Sprite.findOne({
      where: { name: "adventureGirl" },
    });
    const dino = await Sprite.findOne({ where: { name: "dino" } });
    const robot = await Sprite.findOne({ where: { name: "robot" } });
    const santa = await Sprite.findOne({ where: { name: "santa" } });
    const knight = await Sprite.findOne({ where: { name: "knight" } });

    const currentWeightLifted = current.workoutTotalWeight;
    console.log("current weight lifted", currentWeightLifted);
    const user = await User.findByPk(req.user.dataValues.id);
    const totalWeight = user.totalWeight;
    await user.update({ totalWeight: totalWeight + currentWeightLifted });
    const newTotal = user.totalWeight;
    if (newTotal >= 1000) {
      await user.addSprite(cuteGirl);
    }
    if (newTotal >= 2000) {
      await user.addSprite(adventureBoy);
    }
    if (newTotal >= 4000) {
      await user.addSprite(zombie);
    }
    if (newTotal >= 8000) {
      await user.addSprite(ninjaGirl);
    }
    if (newTotal >= 16000) {
      await user.addSprite(jackOLantern);
    }
    if (newTotal >= 32000) {
      await user.addSprite(ninjaBoy);
    }
    if (newTotal >= 64000) {
      await user.addSprite(adventureGirl);
    }
    if (newTotal >= 128000) {
      await user.addSprite(dino);
    }
    if (newTotal >= 256000) {
      await user.addSprite(robot);
    }
    if (newTotal >= 512000) {
      await user.addSprite(santa);
    }
    if (newTotal >= 1024000) {
      await user.addSprite(knight);
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
      },
    });

    if (!workout) {
      let preset = await Workout.findOne({
        where: {
          id: req.params.id,
        },
        raw: true,
      });

      delete preset.id;
      let newWorkout = await Workout.create(preset);

      res.send(newWorkout);
    } else {
      console.log("FINISH THE WORKOUT THAT YOU STARTED!!!");
    }
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
