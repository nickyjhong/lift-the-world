const {
  db,
  models: { User, Exercise, Workout, WorkoutList },
} = require('../server/db');

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

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  // Creating Users

  const admin = await User.create({
    firstName: 'Admin',
    lastName: 'Admin',
    username: 'admin',
    email: 'admin@gmail.com',
    password: '123',
    isAdmin: true,
    totalWeight: 12094,
    level: 18,
  });

  const kyle = await User.create({
    firstName: 'Kyle',
    lastName: 'Parkinson',
    username: 'kyle',
    email: 'kparki@email.com',
    password: '123',
    isAdmin: false,
    totalWeight: 12094,
    level: 18,
  });

  const nicole = await User.create({
    firstName: 'Nicole',
    lastName: 'Hong',
    username: 'nicky',
    email: 'nicole@hong.com',
    password: '123',
    isAdmin: true,
    totalWeight: 44867,
    level: 43,
  });

  const cherry = await User.create({
    firstName: 'Cherry',
    lastName: 'Xu',
    username: 'cherry',
    email: 'cherry@xu.com',
    password: '123',
    isAdmin: true,
    totalWeight: 39126,
    level: 33,
  });

  const ryan = await User.create({
    firstName: 'Ryan',
    lastName: 'Scoville',
    username: 'ryan',
    email: 'ryan@scoville.com',
    password: '123',
    isAdmin: false,
    totalWeight: 28643,
    level: 24,
  });

  //creating exercises for presets

  const chest1 = await Exercise.create({
    name: 'Bench press',
    category: 'chest',
    equipment: ['barbell', 'weights', 'bench'],
    tipsAndTricks: [
      'keep shoulders back',
      "don't bounce off your chest",
      'use a spotter if needed',
    ],
    embedId: 'gRVjAtPip0Y',
  });

  const chest2 = await Exercise.create({
    name: 'Shoulder press',
    category: 'chest',
    equipment: ['dumbbell or barbell'],
    embedId: '5yWaNOvgFCM',
  });
  const chest3 = await Exercise.create({
    name: 'Dumbell Flys',
    category: 'chest',
    equipment: ['Dumbells', 'Bench'],
    embedId: 'eozdVDA78K0',
  });

  const chest4 = await Exercise.create({
    name: 'Decline Bench Press',
    category: 'chest',
    equipment: ['Press Machine or Decline bench', 'weights'],
    embedId: 'OR6WM5Z2Hqs',
  });
  
  const chest5 = await Exercise.create({
    name: 'French Curls',
    category: 'arms',
    equipment: ['dumbell or barbell', 'bench'],
    tipsAndTricks: [
      'utilize full range of motion',
      'move slow and controlled movements',
    ],
    embedId: 'QS5GxWjyVX0',
  });
  const chest6 = await Exercise.create({
    name: 'Triceps Cable Pushdown',
    category: 'arms',
    equipment: ['cable machine'],
    embedId: '2-LAMcpzODU',
  });
  const back1 = await Exercise.create({
    name: 'Lat pulldown',
    category: 'back',
    equipment: ['pulldown machine'],
    tipsAndTricks: [
      'use slow and controlled movements',
      'keep shoulders back',
      'keep back straight',
    ],
    embedId: 'Z_3xHwuO8Tk',
  });
  const back2 = await Exercise.create({
    name: 'Row',
    category: 'back',
    equipment: ['Row Machine'],
    embedId: 'roCP6wCXPqo',
  });
  const back3 = await Exercise.create({
    name: 'Bent Over Row',
    category: 'back',
    equipment: ['dumbbells or barbell'],
    embedId: 'FWJR5Ve8bnQ',
  });
  const back4 = await Exercise.create({
    name: 'Shoulder Shrugs',
    category: 'back',
    equipment: ['dumbbells or barbell'],
    embedId: 'cJRVVxmytaM',
  });
  const back5 = await Exercise.create({
    name: 'Hammer Curl',
    category: 'arms',
    equipment: ['dumbells'],
    tipsAndTricks: [
      'utilize full range of motion',
      'move slow and controlled movements',
    ],
    embedId: 'TwD-YGVP4Bk',
  });
  const back6= await Exercise.create({
    name: 'Preacher curl',
    category: 'arms',
    equipment: ['dumbell or barbell', 'curling bench'],
    tipsAndTricks: [
      'utilize full range of motion',
      'move slow and controlled movements',
    ],
    embedId: 'fIWP-FRFNU0',
  });
  const legs1 = await Exercise.create({
    name: 'Squat',
    category: 'legs',
    equipment: ['barbell', 'weights', 'squat rack'],
    tipsAndTricks: [
      'keep your back straight',
      'push through your heels',
      "don't lock your knees",
    ],
    embedId: 'Dy28eq2PjcM',
  });
  const legs2 = await Exercise.create({
    name: 'Romanian deadlift',
    category: 'legs',
    equipment: ['dumbbell or barbell'],
    embedId: '7AaaYhMqTws',
  });
  const legs3 = await Exercise.create({
    name: 'Leg curl',
    category: 'legs',
    equipment: ['leg curl machine'],
    embedId: 'fK0uZ3KRZRI',
  });
  const legs4 = await Exercise.create({
    name: 'Leg extension',
    category: 'legs',
    equipment: ['leg extension machine'],
    embedId: '8Jqof7z3QYM',
  });
  const legs5 = await Exercise.create({
    name: 'Bulgarian Split Squats',
    category: 'legs',
    equipment: ['Dumbell or barbell', 'bench'],
    embedId: 'HBYGeyb4sSM',
  });
  const legs6 = await Exercise.create({
    name: 'Leg raises',
    category: 'core',
    equipment: ['floor mat'],
    tipsAndTricks: ['engage your core', 'use controlled movements'],
    embedId: 'JB2oyawG9KI',
  });

  const workout1 = await Workout.create({
    status: 'closed',
    workoutTotalWeight: 500,
  });
  const workout2 = await Workout.create({
    status: 'active',
    workoutTotalWeight: 500,
  });


  const pschest1 = await Workout.create({
    status: 'active',
    presetId: 1
  });
  const pschest2 = await Workout.create({
    status: 'active',
    presetId: 2
  });
  const psback1 = await Workout.create({
    status: 'active',
    presetId: 3
  });
  const psback2 = await Workout.create({
    status: 'active',
    presetId: 4
  });
  const pslegs1 = await Workout.create({
    status: 'active',
    presetId: 5
  });
  const pslegs2 = await Workout.create({
    status: 'active',
    presetId: 6
  });

  await pschest1.addExercises([chest1, chest2, chest5]);
  await pschest2.addExercises([chest3, chest4, chest6]);
  await psback1.addExercises([back1, back2, back5]);
  await psback2.addExercises([back3, back4, back6]);
  await pslegs1.addExercises([legs1, legs2, legs3]);
  await pslegs2.addExercises([legs4, legs5, legs6]);

  // ADD IN REPS HERE

  await workout1.setUser(kyle);
  await workout2.setUser(kyle);
  await workout1.addExercise(upper1);
  await workout2.addExercises([upper1, upper4, lower3])

  const open1 = await WorkoutList.findOne({
    where: {
      exerciseId: 1,
      workoutId: 1,
    },
  })

  const closed1 = await WorkoutList.findOne({
    where: {
      exerciseId: 1,
      workoutId: 2,
    },
  });

  open1.sets = dummySets;
  await open1.save();

  closed1.sets = dummySets;
  await closed1.save();

  const test = await User.findByPk(1, {
    include: [{ model: Workout, include: [Exercise] }],
  });

  // console.log('TEST', test.workouts[0].exercises[0].workoutlist.sets);
  console.log(`seeded successfully`);
}

async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
