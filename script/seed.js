

const {db, models: {User, Exercise, Set, Workout, WorkoutList} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */


const dummyExercises = [
  {
    name: 'bench press',
    category: 'chest'
  },
  {
    name: 'lat pulldown',
    category: 'back'
  },
  {
    name: 'back squat',
    category: 'legs'
  },
  {
    name: 'preacher curl',
    category: 'arms'
  },
  {
    name: 'leg raises',
    category: 'core'
  }
];

const dummySets = [
  {
    date: 2022-01-14,
    reps: 10,
    weight: 150
  },
  {
    date: 2022-01-14,
    reps: 6,
    weight: 180
  },
  {
    date: 2022-01-14,
    reps: 4,
    weight: 200
  }
];




async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
const kyle = await User.create(
  {
    firstName: 'Kyle',
    lastName: 'Parkinson',
    username: 'kparki123',
    email: 'kparki@email.com',
    password: '123',
    isTrainer: false
  }
);

const nicole = await User.create(
  {
    firstName: 'Nicole',
    lastName: 'Hong',
    username: 'nicky123',
    email: 'nicole@hong.com',
    password: '123',
    isTrainer: true
  }
);

const cherry = await User.create(
  {
    firstName: 'Cherry',
    lastName: 'Xu',
    username: 'Cherry123',
    email: 'cherry@xu.com',
    password: '123',
    isTrainer: true
  }
);

const ryan = await User.create(
  {
    firstName: 'Ryan',
    lastName: 'Scoville',
    username: 'rscoville1',
    email: 'ryan@scoville.com',
    password: '123',
    isTrainer: false
  }
);

await Promise.all(dummyExercises.map((exercise)=>{
 return Exercise.create(exercise);
}));

await Promise.all(dummySets.map((set)=>{
  return Set.create(set);
}));

await Promise.all(dummyWorkouts.map((workout)=>{
  return Workout.create(workout);
}));
const exercise1 = await Exercise.findByPk(1);
const exercise2 = await Exercise.findByPk(2);
const exercise3 = await Exercise.findByPk(3);
const exercise4 = await Exercise.findByPk(4);
const exercise5 = await Exercise.findByPk(5);
const set1 = await Set.findByPk(1);
const workout1 = await Workout.create({status: 'closed'});

await workout1.setUser(kyle);
await workout1.addExercise(exercise1);
await exercise1.addSet(set1);

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
