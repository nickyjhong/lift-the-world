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
      if (user.hasReached2 === false) {
        newLevel += 1;
        await user.update({ level: newLevel, hasReached2: true });
      }
      if (newTotal >= 2500) {
        await user.addSprite(adventureBoy);
        if (user.hasReached3 === false) {
          newLevel += 1;
          await user.update({ level: newLevel, hasReached3: true });
        }
        if (newTotal >= 5000) {
          await user.addSprite(zombie);
          if (user.hasReached4 === false) {
            newLevel += 1;
            await user.update({ level: newLevel, hasReached4: true });
          }
          if (newTotal >= 10000) {
            await user.addSprite(ninjaGirl);
            if (user.hasReached5 === false) {
              newLevel += 1;
              await user.update({ level: newLevel, hasReached5: true });
            }
            if (newTotal >= 20000) {
              await user.addSprite(jackOLantern);
              if (user.hasReached6 === false) {
                newLevel += 1;
                await user.update({ level: newLevel, hasReached6: true });
              }
              if (newTotal >= 40000) {
                await user.addSprite(ninjaBoy);
                if (user.hasReached7 === false) {
                  newLevel += 1;
                  await user.update({ level: newLevel, hasReached7: true });
                }
                if (newTotal >= 75000) {
                  await user.addSprite(adventureGirl);
                  if (user.hasReached8 === false) {
                    newLevel += 1;
                    await user.update({ level: newLevel, hasReached8: true });
                  }
                  if (newTotal >= 125000) {
                    await user.addSprite(dino);
                    if (user.hasReached9 === false) {
                      newLevel += 1;
                      await user.update({ level: newLevel, hasReached9: true });
                    }
                    if (newTotal >= 250000) {
                      await user.addSprite(robot);
                      if (user.hasReached10 === false) {
                        newLevel += 1;
                        await user.update({
                          level: newLevel,
                          hasReached10: true,
                        });
                      }
                      if (newTotal >= 500000) {
                        await user.addSprite(santa);
                        if (user.hasReached11 === false) {
                          newLevel += 1;
                          await user.update({
                            level: newLevel,
                            hasReached11: true,
                          });
                        }
                        if (newTotal >= 1000000) {
                          await user.addSprite(knight);
                          if (user.hasReached12 === false) {
                            newLevel += 1;
                            await user.update({
                              level: newLevel,
                              hasReached12: true,
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
      console.log("FINISH THE WORKOUT THAT YOU STARTED!!!");
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
