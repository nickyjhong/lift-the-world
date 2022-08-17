'use strict'

const {db, models: {User, Exercises, Sets, Workouts} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
const dummyUsers = [
  {
    firstName: 'Kyle',
    lastName: 'Parkinson',
    username: 'kparki123',
    email: 'kparki@email.com',
    password: '123',
    userType: 'standard'
  },
  {
    firstName: 'Nicole',
    lastName: 'Hong',
    username: 'nicky123',
    email: 'nicole@hong.com',
    password: '123',
    userType: 'trainer'
  },
  {
    firstName: 'Cherry',
    lastName: 'Xu',
    username: 'Cherry123',
    email: 'cherry@xu.com',
    password: '123',
    userType: 'trainer'
  },
  {
    firstName: 'Ryan',
    lastName: 'Scoville',
    username: 'rscoville1',
    email: 'ryan@scoville.com',
    password: '123',
    userType: 'standard'
  }
];

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
    exerciseId: 1,
    userId: 1,
    workoutId:1,
    date: 2022-01-14,
    reps: 10,
    weight: 150
  },
  {
    exerciseId: 1,
    userId: 1,
    workoutId:1,
    date: 2022-01-14,
    reps: 6,
    weight: 180
  },
  {
    exerciseId: 1,
    userId: 1,
    workoutId:1,
    date: 2022-01-14,
    reps: 4,
    weight: 200
  }
];

dummyWorkouts = [
  {userId: 1,
  status: 'closed'}
];



async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = await Promise.all([
    User.create({ username: 'cody', password: '123' }),
    User.create({ username: 'murphy', password: '123' }),
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
  return {
    users: {
      cody: users[0],
      murphy: users[1]
    }
  }
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
