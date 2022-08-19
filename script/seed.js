const {db, models: { User, Exercise, Workout, WorkoutList }} = require('../server/db');

const upperExercises = [
  {
    name: 'Bench press',
    category: 'chest',
    equipment: 'barbell, weights, bench',
    tipsAndTricks: 'keep shoulders back, don\'t bounce off your chest, use a spotter if needed',
    youtubeLink: 'https://www.youtube.com/watch?v=gRVjAtPip0Y'
  }, {
    name: 'Lat pulldown',
    category: 'back',
    equipment: 'pulldown machine',
    tipsAndTricks: 'use slow and controlled movements, keep shoulders back, keep back straight',
    youtubeLink: 'https://www.youtube.com/watch?v=Z_3xHwuO8Tk'
  }, {
    name: 'Preacher curl',
    category: 'arms',
    equipment: 'dumbell or barbell, curling bench',
    tipsAndTricks: 'utilize full range of motion, move slow and controlled movements',
    youtubeLink: 'https://www.youtube.com/watch?v=fIWP-FRFNU0'
  }, {
    name: 'Shoulder press',
    category: 'back',
    equipment: 'dumbbell or barbell',
    tipsAndTricks: '',
    youtubeLink: 'https://www.youtube.com/watch?v=5yWaNOvgFCM',
  }, {
    name: 'Row',
    category: 'back',
    equipment: 'dumbbell or barbell',
    tipsAndTricks: '',
    youtubeLink: 'https://www.youtube.com/watch?v=roCP6wCXPqo'
  }
]

const lowerExercises = [
  {
    name: 'Squat',
    category: 'legs',
    equipment: 'barbell, weights, squat rack',
    tipsAndTricks: 'keep your back straight, push through your heels, don\'t lock your knees',
    youtubeLink: 'https://www.youtube.com/watch?v=Dy28eq2PjcM'
  }, {
    name: 'Leg raises',
    category: 'core',
    equipment: 'floor mat',
    tipsAndTricks: 'engage your core, use controlled movements',
    youtubeLink: 'https://www.youtube.com/watch?v=JB2oyawG9KI'
  }, {
    name: 'Romanian deadlift',
    category: 'legs',
    equipment: 'dumbbell or barbell',
    tipsAndTricks: '',
    youtubeLink: 'https://www.youtube.com/watch?v=7AaaYhMqTws',
  }, {
    name: 'Leg curl',
    category: 'legs',
    equipment: 'leg curl machine',
    tipsAndTricks: '',
    youtubeLink: 'https://www.youtube.com/watch?v=fK0uZ3KRZRI',
  }, {
    name: 'Leg extension',
    category: 'legs',
    equipment: 'leg extension machine',
    tipsAndTricks: '',
    youtubeLink: 'https://www.youtube.com/watch?v=8Jqof7z3QYM',
  }
]


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

  await Promise.all(upperExercises.map((exercise) => Exercise.create(exercise)));
  await Promise.all(lowerExercises.map((exercise) => Exercise.create(exercise)));

  // Creating Users
  const kyle = await User.create({
    firstName: 'Kyle',
    lastName: 'Parkinson',
    username: 'kparki123',
    email: 'kparki@email.com',
    password: '123',
    isAdmin: false,
    totalWeight: 12094,
    level: 18
  });

  const nicole = await User.create({
    firstName: 'Nicole',
    lastName: 'Hong',
    username: 'nicky123',
    email: 'nicole@hong.com',
    password: '123',
    isAdmin: true,
    totalWeight: 44867,
    level: 43
  });

  const cherry = await User.create({
    firstName: 'Cherry',
    lastName: 'Xu',
    username: 'Cherry123',
    email: 'cherry@xu.com',
    password: '123',
    isAdmin: true,
    totalWeight: 39126,
    level: 33
  });

  const ryan = await User.create({
    firstName: 'Ryan',
    lastName: 'Scoville',
    username: 'rscoville1',
    email: 'ryan@scoville.com',
    password: '123',
    isAdmin: false,
    totalWeight: 28643,
    level: 24
  });

  const upper1 = await Exercise.findByPk(1);
  const upper2 = await Exercise.findByPk(2);
  const upper3 = await Exercise.findByPk(3);
  const upper4 = await Exercise.findByPk(4);
  const upper5 = await Exercise.findByPk(5);
  const lower1 = await Exercise.findByPk(6);
  const lower2 = await Exercise.findByPk(7);
  const lower3 = await Exercise.findByPk(8);
  const lower4 = await Exercise.findByPk(9);
  const lower5 = await Exercise.findByPk(10);

  const workout1 = await Workout.create({ status: 'closed' });
  const psworkout1 = await Workout.create({ status: 'active' });
  const psworkout2 = await Workout.create({ status: 'active' });
  const psworkout3 = await Workout.create({ status: 'active' });
  const psworkout4 = await Workout.create({ status: 'active' });

  await psworkout1.addExercises([upper1, upper2, upper3])
  await psworkout2.addExercises([upper3, upper4, upper5])
  await psworkout3.addExercises([lower1, lower2, lower3])
  await psworkout4.addExercises([lower3, lower4, lower5])

  // ADD IN REPS HERE

  await workout1.setUser(kyle);
  await workout1.addExercise(upper1);

  const closed1 = await WorkoutList.findOne({
    where: {
      exerciseId: 1,
      workoutId: 1,
    },
  });
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
