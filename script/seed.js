const {
  db,
  models: { User, Exercise, Workout, WorkoutList },
} = require("../server/db");

const dummySets = [
  {
    reps: 10,
    weight: 150,
  },
  {
    reps: 6,
    weight: 180,
  },
  {
    reps: 4,
    weight: 200,
  },
];

const dummySets2 = [
  {
    reps: 13,
    weight: 80,
  },
  {
    reps: 14,
    weight: 200,
  },
  {
    reps: 15,
    weight: 250,
  },
];

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  // Creating Users

  const admin = await User.create({
    username: "admin",
    email: "admin@gmail.com",
    password: "123",
    isAdmin: true,
    totalWeight: 12094,
    level: 18,
  });

  const kyle = await User.create({
    username: "kyle",
    email: "kparki@email.com",
    password: "123",
    isAdmin: false,
    totalWeight: 12097,
    level: 18,
  });

  const nicole = await User.create({
    username: "nicky",
    email: "nicole@hong.com",
    password: "123",
    isAdmin: true,
    totalWeight: 44867,
    level: 43,
  });

  const cherry = await User.create({
    username: "cherry",
    email: "cherry@xu.com",
    password: "123",
    isAdmin: true,
    totalWeight: 39126,
    level: 33,
  });

  const ryan = await User.create({
    username: "ryan",
    email: "ryan@scoville.com",
    password: "123",
    isAdmin: false,
    totalWeight: 28643,
    level: 24,
  });

  //creating exercises for presets

  const chest1 = await Exercise.create({
    name: "Bench press",
    category: "chest",
    equipment: ["barbell", "weights", "bench"],
    tipsAndTricks: [
      "keep shoulders back",
      "don't bounce off your chest",
      "use a spotter if needed",
    ],
    embedId: "gRVjAtPip0Y",
  });

  const chest2 = await Exercise.create({
    name: "Shoulder press",
    category: "chest",
    equipment: ["dumbbell or barbell"],
    embedId: "5yWaNOvgFCM",
  });
  const chest3 = await Exercise.create({
    name: "Dumbell Flys",
    category: "chest",
    equipment: ["Dumbells", "Bench"],
    embedId: "eozdVDA78K0",
  });

  const chest4 = await Exercise.create({
    name: "Decline Bench Press",
    category: "chest",
    equipment: ["Press Machine or Decline bench", "weights"],
    embedId: "OR6WM5Z2Hqs",
  });

  const chest5 = await Exercise.create({
    name: "French Curls",
    category: "arms",
    equipment: ["dumbell or barbell", "bench"],
    tipsAndTricks: [
      "utilize full range of motion",
      "move slow and controlled movements",
    ],
    embedId: "QS5GxWjyVX0",
  });
  const chest6 = await Exercise.create({
    name: "Triceps Cable Pushdown",
    category: "arms",
    equipment: ["cable machine"],
    embedId: "2-LAMcpzODU",
  });
  const back1 = await Exercise.create({
    name: "Lat pulldown",
    category: "back",
    equipment: ["pulldown machine"],
    tipsAndTricks: [
      "use slow and controlled movements",
      "keep shoulders back",
      "keep back straight",
    ],
    embedId: "Z_3xHwuO8Tk",
  });
  const back2 = await Exercise.create({
    name: "Row",
    category: "back",
    equipment: ["Row Machine"],
    embedId: "roCP6wCXPqo",
  });
  const back3 = await Exercise.create({
    name: "Bent Over Row",
    category: "back",
    equipment: ["dumbbells or barbell"],
    embedId: "FWJR5Ve8bnQ",
  });
  const back4 = await Exercise.create({
    name: "Shoulder Shrugs",
    category: "back",
    equipment: ["dumbbells or barbell"],
    embedId: "cJRVVxmytaM",
  });
  const back5 = await Exercise.create({
    name: "Hammer Curl",
    category: "arms",
    equipment: ["dumbells"],
    tipsAndTricks: [
      "utilize full range of motion",
      "move slow and controlled movements",
    ],
    embedId: "TwD-YGVP4Bk",
  });
  const back6 = await Exercise.create({
    name: "Preacher curl",
    category: "arms",
    equipment: ["dumbell or barbell", "curling bench"],
    tipsAndTricks: [
      "utilize full range of motion",
      "move slow and controlled movements",
    ],
    embedId: "fIWP-FRFNU0",
  });
  const legs1 = await Exercise.create({
    name: "Squat",
    category: "legs",
    equipment: ["barbell", "weights", "squat rack"],
    tipsAndTricks: [
      "keep your back straight",
      "push through your heels",
      "don't lock your knees",
    ],
    embedId: "Dy28eq2PjcM",
  });
  const legs2 = await Exercise.create({
    name: "Romanian deadlift",
    category: "legs",
    equipment: ["dumbbell or barbell"],
    embedId: "7AaaYhMqTws",
  });
  const legs3 = await Exercise.create({
    name: "Leg curl",
    category: "legs",
    equipment: ["leg curl machine"],
    embedId: "fK0uZ3KRZRI",
  });
  const legs4 = await Exercise.create({
    name: "Leg extension",
    category: "legs",
    equipment: ["leg extension machine"],
    embedId: "8Jqof7z3QYM",
  });
  const legs5 = await Exercise.create({
    name: "Bulgarian Split Squats",
    category: "legs",
    equipment: ["Dumbell or barbell", "bench"],
    embedId: "HBYGeyb4sSM",
  });
  const legs6 = await Exercise.create({
    name: "Leg raises",
    category: "core",
    equipment: ["floor mat"],
    tipsAndTricks: ["engage your core", "use controlled movements"],
    embedId: "JB2oyawG9KI",
  });

  const pschest1 = await Workout.create({
    name: "chest1",
    status: "active",
    isPreset: true,
  });
  const pschest2 = await Workout.create({
    name: "chest2",
    status: "active",
    isPreset: true,
  });
  const psback1 = await Workout.create({
    name: "back1",
    status: "active",
    isPreset: true,
  });
  const psback2 = await Workout.create({
    name: "back2",
    status: "active",
    isPreset: true,
  });
  const pslegs1 = await Workout.create({
    name: "legs1",
    status: "active",
    isPreset: true,
  });
  const pslegs2 = await Workout.create({
    name: "legs2",
    status: "active",
    isPreset: true,
  });
  const workout1 = await Workout.create({
    status: "closed",
    workoutTotalWeight: 500,
  });
  const workout2 = await Workout.create({
    status: "closed",
    workoutTotalWeight: 500,
  });
  const workout3 = await Workout.create({
    status: "closed",
    workoutTotalWeight: 800,
  });
  const workout4 = await Workout.create({
    status: "closed",
    workoutTotalWeight: 800,
  });
  const workout5 = await Workout.create({
    status: "closed",
    workoutTotalWeight: 800,
  });
  const workout6 = await Workout.create({
    status: "active",
    workoutTotalWeight: 800,
  });

  await pschest1.addExercises([chest1, chest2, chest5]);
  await pschest2.addExercises([chest3, chest4, chest6]);
  await psback1.addExercises([back1, back2, back5]);
  await psback2.addExercises([back3, back4, back6]);
  await pslegs1.addExercises([legs1, legs2, legs3]);
  await pslegs2.addExercises([legs4, legs5, legs6]);

  // ADD IN REPS HERE

  await workout1.setUser(cherry);
  await workout2.setUser(cherry);
  await workout3.setUser(cherry);
  await workout4.setUser(cherry);
  await workout5.setUser(cherry);
  await workout6.setUser(cherry);
  await workout1.addExercise(chest1);
  await workout2.addExercises([chest1, chest2, chest3]);
  await workout3.addExercises([chest1, chest2, chest3]);
  await workout4.addExercises([chest1, chest2, chest3]);
  await workout5.addExercises([chest1, chest2, chest3]);
  await workout6.addExercises([chest1, chest2, chest3]);

  const closed1 = await WorkoutList.findOne({
    where: {
      exerciseId: 1,
      workoutId: 7,
    },
  });

  const closed2 = await WorkoutList.findOne({
    where: {
      exerciseId: 2,
      workoutId: 8,
    },
  });
  const closed3 = await WorkoutList.findOne({
    where: {
      exerciseId: 1,
      workoutId: 9,
    },
  });

  const closed4 = await WorkoutList.findOne({
    where: {
      exerciseId: 2,
      workoutId: 10,
    },
  });
  const closed5 = await WorkoutList.findOne({
    where: {
      exerciseId: 1,
      workoutId: 11,
    },
  });


  const open1 = await WorkoutList.findOne({
    where: {
      exerciseId: 1,
      workoutId: 12,
    },
  });

  await closed1.setUser(cherry)
  await closed2.setUser(cherry)
  await closed3.setUser(cherry)
  await closed4.setUser(cherry)
  await closed5.setUser(cherry)
  await open1.setUser(cherry)


  closed1.sets = dummySets;
  await closed1.save();

  closed2.sets = dummySets2;
  await closed2.save();

  closed3.sets = [{reps: 3, weight: 40}]
  await closed3.save();

  closed4.sets = [{reps: 20, weight: 200}]
  await closed4.save();

  closed5.sets = [{reps: 1, weight: 1}]
  await closed5.save();

  open1.sets = [{reps: 1, weight: 1}]
  await open1.save();

  // const test = await User.findByPk(1, {
  //   include: [{ model: Workout, include: [Exercise] }],
  // });

  // console.log('TEST', test.workouts[0].exercises[0].workoutlist.sets);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
