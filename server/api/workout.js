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

router.get('/allprevious', requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findAll({
      where: {
        userId: req.user.dataValues.id,
        status: 'closed',
      },
      order: [ [ 'createdAt', 'DESC' ]],
      include: [Exercise],

    });
    res.send(workout);
  } catch (error) {
    next(error);
  }
});

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
    const redHatBoy = await Sprite.findOne({ where: { name: "redHatBoy" } });
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
      await user.addSprite(redHatBoy);
      if (newLevel < 2) {
        newLevel += 1;
        await user.update({ level: newLevel });
      }
      if (newTotal >= 2500) {
        if (newLevel < 3) {
          newLevel += 1;
          await user.update({ level: newLevel });
        }
        if (newTotal >= 5000) {
          if (newLevel < 4) {
            newLevel += 1;
            await user.update({ level: newLevel });
          }
          if (newTotal >= 8000) {
            if (newLevel < 5) {
              newLevel += 1;
              await user.update({ level: newLevel });
            }
            if (newTotal >= 12000) {
              await user.addSprite(cuteGirl);
              if (newLevel < 6) {
                newLevel += 1;
                await user.update({ level: newLevel });
              }
              if (newTotal >= 16000) {
                if (newLevel < 7) {
                  newLevel += 1;
                  await user.update({ level: newLevel });
                }
                if (newTotal >= 20000) {
                  if (newLevel < 8) {
                    newLevel += 1;
                    await user.update({ level: newLevel });
                  }
                  if (newTotal >= 25000) {
                    await user.addSprite(adventureBoy);
                    if (newLevel < 9) {
                      newLevel += 1;
                      await user.update({ level: newLevel });
                    }
                    if (newTotal >= 30000) {
                      if (newLevel < 10) {
                        newLevel += 1;
                        await user.update({ level: newLevel });
                      }
                      if (newTotal >= 35000) {
                        if (newLevel < 11) {
                          newLevel += 1;
                          await user.update({ level: newLevel });
                        }
                        if (newTotal >= 40000) {
                          if (newLevel < 12) {
                            newLevel += 1;
                            await user.update({ level: newLevel });
                          }
                          if (newTotal >= 50000) {
                            await user.addSprite(zombie);
                            if (newLevel < 13) {
                              newLevel += 1;
                              await user.update({ level: newLevel });
                            }
                            if (newTotal >= 60000) {
                              if (newLevel < 14) {
                                newLevel += 1;
                                await user.update({ level: newLevel });
                              }
                              if (newTotal >= 75000) {
                                if (newLevel < 15) {
                                  newLevel += 1;
                                  await user.update({ level: newLevel });
                                }
                                if (newTotal >= 100000) {
                                  await user.addSprite(ninjaGirl);
                                  if (newLevel < 16) {
                                    newLevel += 1;
                                    await user.update({ level: newLevel });
                                  }
                                  if (newTotal >= 125000) {
                                    if (newLevel < 17) {
                                      newLevel += 1;
                                      await user.update({ level: newLevel });
                                    }
                                    if (newTotal >= 150000) {
                                      if (newLevel < 18) {
                                        newLevel += 1;
                                        await user.update({ level: newLevel });
                                      }
                                      if (newTotal >= 175000) {
                                        if (newLevel < 19) {
                                          newLevel += 1;
                                          await user.update({
                                            level: newLevel,
                                          });
                                        }
                                        if (newTotal >= 200000) {
                                          if (newLevel < 20) {
                                            newLevel += 1;
                                            await user.update({
                                              level: newLevel,
                                            });
                                          }
                                          if (newTotal >= 250000) {
                                            await user.addSprite(jackOLantern);
                                            if (newLevel < 21) {
                                              newLevel += 1;
                                              await user.update({
                                                level: newLevel,
                                              });
                                            }
                                            if (newTotal >= 300000) {
                                              if (newLevel < 22) {
                                                newLevel += 1;
                                                await user.update({
                                                  level: newLevel,
                                                });
                                              }
                                              if (newTotal >= 350000) {
                                                if (newLevel < 23) {
                                                  newLevel += 1;
                                                  await user.update({
                                                    level: newLevel,
                                                  });
                                                }
                                                if (newTotal >= 400000) {
                                                  if (newLevel < 24) {
                                                    newLevel += 1;
                                                    await user.update({
                                                      level: newLevel,
                                                    });
                                                  }
                                                  if (newTotal >= 500000) {
                                                    await user.addSprite(
                                                      ninjaBoy
                                                    );
                                                    if (newLevel < 25) {
                                                      newLevel += 1;
                                                      await user.update({
                                                        level: newLevel,
                                                      });
                                                    }
                                                    if (newTotal >= 600000) {
                                                      if (newLevel < 26) {
                                                        newLevel += 1;
                                                        await user.update({
                                                          level: newLevel,
                                                        });
                                                      }
                                                      if (newTotal >= 700000) {
                                                        if (newLevel < 27) {
                                                          newLevel += 1;
                                                          await user.update({
                                                            level: newLevel,
                                                          });
                                                        }
                                                        if (
                                                          newTotal >= 800000
                                                        ) {
                                                          if (newLevel < 28) {
                                                            newLevel += 1;
                                                            await user.update({
                                                              level: newLevel,
                                                            });
                                                          }
                                                          if (
                                                            newTotal >= 900000
                                                          ) {
                                                            if (newLevel < 29) {
                                                              newLevel += 1;
                                                              await user.update(
                                                                {
                                                                  level:
                                                                    newLevel,
                                                                }
                                                              );
                                                            }
                                                            if (
                                                              newTotal >=
                                                              1000000
                                                            ) {
                                                              await user.addSprite(
                                                                adventureGirl
                                                              );
                                                              if (
                                                                newLevel < 30
                                                              ) {
                                                                newLevel += 1;
                                                                await user.update(
                                                                  {
                                                                    level:
                                                                      newLevel,
                                                                  }
                                                                );
                                                              }
                                                              if (
                                                                newTotal >=
                                                                1100000
                                                              ) {
                                                                if (
                                                                  newLevel < 31
                                                                ) {
                                                                  newLevel += 1;
                                                                  await user.update(
                                                                    {
                                                                      level:
                                                                        newLevel,
                                                                    }
                                                                  );
                                                                }
                                                                if (
                                                                  newTotal >=
                                                                  1200000
                                                                ) {
                                                                  if (
                                                                    newLevel <
                                                                    32
                                                                  ) {
                                                                    newLevel += 1;
                                                                    await user.update(
                                                                      {
                                                                        level:
                                                                          newLevel,
                                                                      }
                                                                    );
                                                                  }
                                                                  if (
                                                                    newTotal >=
                                                                    1300000
                                                                  ) {
                                                                    if (
                                                                      newLevel <
                                                                      33
                                                                    ) {
                                                                      newLevel += 1;
                                                                      await user.update(
                                                                        {
                                                                          level:
                                                                            newLevel,
                                                                        }
                                                                      );
                                                                    }
                                                                    if (
                                                                      newTotal >=
                                                                      1400000
                                                                    ) {
                                                                      if (
                                                                        newLevel <
                                                                        34
                                                                      ) {
                                                                        newLevel += 1;
                                                                        await user.update(
                                                                          {
                                                                            level:
                                                                              newLevel,
                                                                          }
                                                                        );
                                                                      }
                                                                      if (
                                                                        newTotal >=
                                                                        1500000
                                                                      ) {
                                                                        await user.addSprite(
                                                                          dino
                                                                        );
                                                                        if (
                                                                          newLevel <
                                                                          35
                                                                        ) {
                                                                          newLevel += 1;
                                                                          await user.update(
                                                                            {
                                                                              level:
                                                                                newLevel,
                                                                            }
                                                                          );
                                                                        }
                                                                        if (
                                                                          newTotal >=
                                                                          1600000
                                                                        ) {
                                                                          if (
                                                                            newLevel <
                                                                            36
                                                                          ) {
                                                                            newLevel += 1;
                                                                            await user.update(
                                                                              {
                                                                                level:
                                                                                  newLevel,
                                                                              }
                                                                            );
                                                                          }
                                                                          if (
                                                                            newTotal >=
                                                                            1700000
                                                                          ) {
                                                                            if (
                                                                              newLevel <
                                                                              37
                                                                            ) {
                                                                              newLevel += 1;
                                                                              await user.update(
                                                                                {
                                                                                  level:
                                                                                    newLevel,
                                                                                }
                                                                              );
                                                                            }
                                                                            if (
                                                                              newTotal >=
                                                                              1800000
                                                                            ) {
                                                                              if (
                                                                                newLevel <
                                                                                38
                                                                              ) {
                                                                                newLevel += 1;
                                                                                await user.update(
                                                                                  {
                                                                                    level:
                                                                                      newLevel,
                                                                                  }
                                                                                );
                                                                              }
                                                                              if (
                                                                                newTotal >=
                                                                                1900000
                                                                              ) {
                                                                                if (
                                                                                  newLevel <
                                                                                  39
                                                                                ) {
                                                                                  newLevel += 1;
                                                                                  await user.update(
                                                                                    {
                                                                                      level:
                                                                                        newLevel,
                                                                                    }
                                                                                  );
                                                                                }
                                                                                if (
                                                                                  newTotal >=
                                                                                  2000000
                                                                                ) {
                                                                                  await user.addSprite(
                                                                                    robot
                                                                                  );
                                                                                  if (
                                                                                    newLevel <
                                                                                    40
                                                                                  ) {
                                                                                    newLevel += 1;
                                                                                    await user.update(
                                                                                      {
                                                                                        level:
                                                                                          newLevel,
                                                                                      }
                                                                                    );
                                                                                  }
                                                                                  if (
                                                                                    newTotal >=
                                                                                    2100000
                                                                                  ) {
                                                                                    if (
                                                                                      newLevel <
                                                                                      41
                                                                                    ) {
                                                                                      newLevel += 1;
                                                                                      await user.update(
                                                                                        {
                                                                                          level:
                                                                                            newLevel,
                                                                                        }
                                                                                      );
                                                                                    }
                                                                                    if (
                                                                                      newTotal >=
                                                                                      2200000
                                                                                    ) {
                                                                                      if (
                                                                                        newLevel <
                                                                                        42
                                                                                      ) {
                                                                                        newLevel += 1;
                                                                                        await user.update(
                                                                                          {
                                                                                            level:
                                                                                              newLevel,
                                                                                          }
                                                                                        );
                                                                                      }
                                                                                      if (
                                                                                        newTotal >=
                                                                                        2300000
                                                                                      ) {
                                                                                        if (
                                                                                          newLevel <
                                                                                          43
                                                                                        ) {
                                                                                          newLevel += 1;
                                                                                          await user.update(
                                                                                            {
                                                                                              level:
                                                                                                newLevel,
                                                                                            }
                                                                                          );
                                                                                        }
                                                                                        if (
                                                                                          newTotal >=
                                                                                          2400000
                                                                                        ) {
                                                                                          if (
                                                                                            newLevel <
                                                                                            44
                                                                                          ) {
                                                                                            newLevel += 1;
                                                                                            await user.update(
                                                                                              {
                                                                                                level:
                                                                                                  newLevel,
                                                                                              }
                                                                                            );
                                                                                          }
                                                                                          if (
                                                                                            newTotal >=
                                                                                            2500000
                                                                                          ) {
                                                                                            await user.addSprite(
                                                                                              santa
                                                                                            );
                                                                                            if (
                                                                                              newLevel <
                                                                                              45
                                                                                            ) {
                                                                                              newLevel += 1;
                                                                                              await user.update(
                                                                                                {
                                                                                                  level:
                                                                                                    newLevel,
                                                                                                }
                                                                                              );
                                                                                            }
                                                                                            if (
                                                                                              newTotal >=
                                                                                              2600000
                                                                                            ) {
                                                                                              if (
                                                                                                newLevel <
                                                                                                46
                                                                                              ) {
                                                                                                newLevel += 1;
                                                                                                await user.update(
                                                                                                  {
                                                                                                    level:
                                                                                                      newLevel,
                                                                                                  }
                                                                                                );
                                                                                              }
                                                                                              if (
                                                                                                newTotal >=
                                                                                                2700000
                                                                                              ) {
                                                                                                if (
                                                                                                  newLevel <
                                                                                                  47
                                                                                                ) {
                                                                                                  newLevel += 1;
                                                                                                  await user.update(
                                                                                                    {
                                                                                                      level:
                                                                                                        newLevel,
                                                                                                    }
                                                                                                  );
                                                                                                }
                                                                                                if (
                                                                                                  newTotal >=
                                                                                                  2800000
                                                                                                ) {
                                                                                                  if (
                                                                                                    newLevel <
                                                                                                    48
                                                                                                  ) {
                                                                                                    newLevel += 1;
                                                                                                    await user.update(
                                                                                                      {
                                                                                                        level:
                                                                                                          newLevel,
                                                                                                      }
                                                                                                    );
                                                                                                  }
                                                                                                  if (
                                                                                                    newTotal >=
                                                                                                    2900000
                                                                                                  ) {
                                                                                                    if (
                                                                                                      newLevel <
                                                                                                      49
                                                                                                    ) {
                                                                                                      newLevel += 1;
                                                                                                      await user.update(
                                                                                                        {
                                                                                                          level:
                                                                                                            newLevel,
                                                                                                        }
                                                                                                      );
                                                                                                    }
                                                                                                    if (
                                                                                                      newTotal >=
                                                                                                      3000000
                                                                                                    ) {
                                                                                                      await user.addSprite(
                                                                                                        knight
                                                                                                      );
                                                                                                      if (
                                                                                                        newLevel <
                                                                                                        50
                                                                                                      ) {
                                                                                                        newLevel += 1;
                                                                                                        await user.update(
                                                                                                          {
                                                                                                            level:
                                                                                                              newLevel,
                                                                                                          }
                                                                                                        );
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
      }
    }

    res.send(current);
  } catch (error) {
    next(error);
  }
});

router.put("/update", requireToken, async (req, res, next) => {
  try {
    const workout = await Workout.findOne({
      where: {
        status: "active",
        userId: req.user.dataValues.id,
      }
    })
    await workout.update(req.body)
    res.send(workout)
  } catch(error) {
    next(error);
  }
})

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
      preset.isPreset = false;
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
          sets: [{ reps: 8, weight: "", setId: 0 }, { reps: 8, weight: "", setId: 1 }, { reps: 8, weight: "", setId: 2 }],
        });
      });

      res.send(newWorkout);
    } else {
      await Workout.destroy({
        where: {
          userId: req.user.dataValues.id,
          status: "active",
        },
      });

      let preset = await Workout.findOne({
        where: {
          id: req.params.id,
        },
        raw: true,
      });

      preset.status = "active";
      preset.isPreset = false;
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
          sets: [{ reps: 8, weight: "", setId: 0 }, { reps: 8, weight: "", setId: 1 }, { reps: 8, weight: "", setId: 2 }],
        });
      });

      res.send(newWorkout);
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
