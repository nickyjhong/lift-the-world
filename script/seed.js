const {db, models: {User, Exercise, Workout, WorkoutList} } = require('../server/db')

const dummyExercises = [
  {
    name: 'bench press',
    category: 'chest'
  }, {
    name: 'lat pulldown',
    category: 'back'
  }, {
    name: 'back squat',
    category: 'legs'
  }, {
    name: 'preacher curl',
    category: 'arms'
  }, {
    name: 'leg raises',
    category: 'core'
  }
];

const dummySets = [
  {
    reps: 10,
    weight: 150
  }, {
    reps: 6,
    weight: 180
  }, {
    reps: 4,
    weight: 200
  }
];

async function seed() {
  await db.sync({ force: true })
  console.log('db synced!')

  await Promise.all(dummyExercises.map((exercise)=>{
    return Exercise.create(exercise);
  }));

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

  const exercise1 = await Exercise.findByPk(1);
  const exercise2 = await Exercise.findByPk(2);
  const exercise3 = await Exercise.findByPk(3);
  const exercise4 = await Exercise.findByPk(4);
  const exercise5 = await Exercise.findByPk(5);
  const set1 = await _Set.findByPk(1);
  const workout1 = await Workout.create({status: 'closed'});

  await workout1.setUser(kyle);
  await workout1.addExercise(exercise1);

  const closed1 = await WorkoutList.findOne({
    where: {
      exerciseId: 1,
      workoutId: 1
    }
  });
  closed1.sets = dummySets
  await closed1.save()

  const test = await User.findByPk(1, {
    include: [{model: Workout, include: [Exercise]}]
  })

  console.log('TEST', test.workouts[0].exercises[0].workoutlist.sets)
  console.log(`seeded successfully`)
}

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

if (module === require.main) {
  runSeed()
}

module.exports = seed
