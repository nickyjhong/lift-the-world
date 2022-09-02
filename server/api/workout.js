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

    const currentWorkout = current.dataValues.exercises.map((exercise) => {
      return exercise.dataValues.workoutlist.dataValues.sets.map((set) => {
        return set.reps * set.weight;
      });
    });

    const totalWeightFromWorkoutArr = currentWorkout.map((set) => {
      let total = 0;
      const eachSet = set.reduce((acc, curr) => {
        return (acc += parseInt(curr));
      }, 0);
      total += eachSet;
      return total;
    });

    const totalWeightFromWorkout = totalWeightFromWorkoutArr.reduce(
      (acc, curr) => {
        return (acc += curr);
      },
      0
    );

    const user = await User.findByPk(req.user.dataValues.id);
    await user.update({
      totalWeight: (user.totalWeight += totalWeightFromWorkout),
    });

    await current.update({
      status: "closed",
      workoutTotalWeight: totalWeightFromWorkout,
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

    const newTotal = user.totalWeight;
    let newLevel = user.level;

    if (newTotal >= 1000) {
      await user.addSprite(cuteGirl);
      if (newLevel < 2) {
        newLevel += 1;
        await user.update({ level: newLevel });
      }
      if (newTotal >= 2500) {
        await user.addSprite(adventureBoy);
        if (newLevel < 3) {
          newLevel += 1;
          await user.update({ level: newLevel});
        }
        if (newTotal >= 5000) {
          await user.addSprite(zombie);
          if (newLevel < 4) {
            newLevel += 1;
            await user.update({ level: newLevel});
          }
          if (newTotal >= 10000) {
            await user.addSprite(ninjaGirl);
            if (newLevel < 5) {
              newLevel += 1;
              await user.update({ level: newLevel});
            }
            if (newTotal >= 20000) {
              await user.addSprite(jackOLantern);
              if (newLevel < 6) {
                newLevel += 1;
                await user.update({ level: newLevel });
              }
              if (newTotal >= 40000) {
                await user.addSprite(ninjaBoy);
                if (newLevel < 7) {
                  newLevel += 1;
                  await user.update({ level: newLevel});
                }
                if (newTotal >= 75000) {
                  await user.addSprite(adventureGirl);
                  if (newLevel < 8) {
                    newLevel += 1;
                    await user.update({ level: newLevel});
                  }
                  if (newTotal >= 125000) {
                    await user.addSprite(dino);
                    if (newLevel < 9) {
                      newLevel += 1;
                      await user.update({ level: newLevel});
                    }
                    if (newTotal >= 250000) {
                      await user.addSprite(robot);
                      if (newLevel < 10) {
                        newLevel += 1;
                        await user.update({
                          level: newLevel
                        });
                      }
                      if (newTotal >= 500000) {
                        await user.addSprite(santa);
                        if (newLevel < 11) {
                          newLevel += 1;
                          await user.update({
                            level: newLevel
                          });
                        }
                        if (newTotal >= 1000000) {
                          await user.addSprite(knight);
                          if (newLevel < 12) {
                            newLevel += 1;
                            await user.update({
                              level: newLevel
                            });
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
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

router.post("/:id/add", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });

    if (!workout) {
      let preset = await Workout.findOne({
        where: {
          id: req.params.id,
        },
        raw: true,
      });

      preset.status = "active";
      preset.userId = req.user.dataValues.id;
      delete preset.id;
      let newWorkout = await Workout.create(preset);

      const workoutLists = await WorkoutList.findAll({
        where: {
          workoutId: req.params.id,
        },
      });

      const exercises = workoutLists.map((workoutlist) => {
        return workoutlist.dataValues.exerciseId;
      });

      for (let i = 0; i < exercises.length; i++) {
        const exercise = await Exercise.findByPk(exercises[i]);
        await newWorkout.addExercise(exercise);
      }

      const newWorkoutExercise = await WorkoutList.findAll({
        where: {
          workoutId: newWorkout.id,
        },
      });

      newWorkoutExercise.map((exercise) => {
        exercise.update({
          userId: req.user.dataValues.id,
          sets: [{ reps: "", weight: "", setId: 0 }],
        });
      });

      res.send(newWorkout);
    } else {
      console.log("You have an active workout already!");
      res.send(workout);
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

router.delete("/:exerciseId", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      where: {
        userId: req.user.dataValues.id,
        status: "active",
      },
      include: [Exercise],
    });

    if (workout) {
      await WorkoutList.destroy({
        where: {
          workoutId: workout.id,
          exerciseId: req.params.exerciseId,
        },
      });
    }

    const workoutlists = await WorkoutList.findAll({
      where: {
        workoutId: workout.id,
      },
    });

    if (workoutlists.length === 0) {
      await Workout.destroy({
        where: {
          id: workout.id,
        },
      });
    }

    res.send(
      await Workout.findOne({
        where: {
          userId: req.user.dataValues.id,
          status: "active",
        },
        include: [Exercise],
      })
    );
  } catch (error) {
    next(error);
  }
});
module.exports = router;
