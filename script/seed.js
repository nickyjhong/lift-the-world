const {
  db,
  models: { User, Exercise, Workout, WorkoutList, Sprite, userSprites },
} = require("../server/db");

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
    selectedSprite: "dog",
  });

  const kyle = await User.create({
    username: "kyle",
    email: "kparki@email.com",
    password: "123",
    isAdmin: false,
    totalWeight: 12097,
    level: 18,
    selectedSprite: "theBoy",
  });

  const nicole = await User.create({
    username: "nicky",
    email: "nicole@hong.com",
    password: "123",
    isAdmin: true,
    totalWeight: 44867,
    level: 43,
    selectedSprite: "redHatBoy",
  });

  const cherry = await User.create({
    username: "cherry",
    email: "cherry@xu.com",
    password: "123",
    isAdmin: true,
    totalWeight: 39126,
    level: 33,
    selectedSprite: "cat",
  });

  const ryan = await User.create({
    username: "ryan",
    email: "ryan@scoville.com",
    password: "123",
    isAdmin: false,
    totalWeight: 28643,
    level: 24,
    selectedSprite: "cuteGirl",
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
    category: "triceps",
    equipment: ["dumbell or barbell", "bench"],
    tipsAndTricks: [
      "utilize full range of motion",
      "move slow and controlled movements",
    ],
    embedId: "QS5GxWjyVX0",
  });
  const chest6 = await Exercise.create({
    name: "Triceps Cable Pushdown",
    category: "triceps",
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
    category: "biceps",
    equipment: ["dumbells"],
    tipsAndTricks: [
      "utilize full range of motion",
      "move slow and controlled movements",
    ],
    embedId: "TwD-YGVP4Bk",
  });
  const back6 = await Exercise.create({
    name: "Preacher curl",
    category: "biceps",
    equipment: ["dumbell or barbell", "curling bench"],
    tipsAndTricks: [
      "utilize full range of motion",
      "move slow and controlled movements",
    ],
    embedId: "fIWP-FRFNU0",
  });
  const legs1 = await Exercise.create({
    name: "Squat",
    category: "glutes",
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
    category: "glutes",
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

  const barbellCurl = await Exercise.create({
    name: "Barbell Curl",
    category: "biceps",
    equipment: ["barbell", "weights"],
    tipsAndTricks: [
      "use controlled movements",
      "Use lower weight if you find yourself leaning back to assist",
    ],
    embedId: "dDI8ClxRS04",
  });

  const chinup = await Exercise.create({
    name: "Chin Up",
    category: "biceps",
    equipment: ["bar", "your body"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "brhRXlOhsAM",
  });

  const inclinedumbellcurl = await Exercise.create({
    name: "Incline Dumbell Curl",
    category: "biceps",
    equipment: ["bench", "dumbells"],
    tipsAndTricks: [
      "use controlled movements",
      "don't use momentum to lift the weights",
    ],
    embedId: "soxrZlIl35U",
  });

  const diamondPushups = await Exercise.create({
    name: "Diamond Pushups",
    category: "triceps",
    equipment: ["the floor", "a mat"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "J0DnG1_S92I",
  });

  const kickBacks = await Exercise.create({
    name: "KickBacks",
    category: "triceps",
    equipment: ["dumbells", "bench"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "ZO81bExngMI",
  });

  const tricepsExtension = await Exercise.create({
    name: "Triceps Extension",
    category: "triceps",
    equipment: ["dumbell", "bench"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "nRiJVZDpdL0",
  });

  const frontSquat = await Exercise.create({
    name: "Front Squat",
    category: "glutes",
    equipment: ["barbell", "weights", "squat wrack"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "wyDbagKS7Rg",
  });

  const goodMorning = await Exercise.create({
    name: "Good Morning",
    category: "legs",
    equipment: ["barbell", "weights"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "vKPGe8zb2S4",
  });

  const lunge = await Exercise.create({
    name: "Lunge",
    category: "legs",
    equipment: ["barbell", "weights", "dumbells"],
    tipsAndTricks: [
      "use controlled movements",
      "lunge as far as required for your front knee to reach 90 degrees",
    ],
    embedId: "QOVaHwm-Q6U",
  });

  const forearmPlank = await Exercise.create({
    name: "ForeArm Plank",
    category: "core",
    equipment: ["workout mat", "your body"],
    tipsAndTricks: ["activate your core", "breath through the exercise"],
    embedId: "pSHjTRCQxIw",
  });

  const russianTwist = await Exercise.create({
    name: "Russian Twist",
    category: "core",
    equipment: ["Kettle Bell", "floor mat"],
    tipsAndTricks: [
      "use controlled movements",
      "twist as far as you can comfortably",
    ],
    embedId: "wkD8rjkodUI",
  });

  const deadBug = await Exercise.create({
    name: "Dead Bug",
    category: "core",
    equipment: ["floor mat"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "8NBNM8haZx0",
  });

  const woodChop = await Exercise.create({
    name: "Half-kneeling Wood Chop",
    category: "core",
    equipment: ["dumbell", "kettle bell", "floor mat"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "SfTBo2Tjl7M",
  });

  const bodySaw = await Exercise.create({
    name: "Body Saw",
    category: "core",
    equipment: ["floor mat", "floor sliders"],
    tipsAndTricks: ["use controlled movements", "squeeze your core"],
    embedId: "oSNHVD0zT3Q",
  });

  const dips = await Exercise.create({
    name: "BodyWeight or Assisted Dips",
    category: "chest",
    equipment: ["Dip wrack", "assisted dip machine"],
    tipsAndTricks: [
      "use controlled movements",
      "don't go so far that you strain your shoulders",
    ],
    embedId: "wjUmnZH528Y",
  });

  const deadLift = await Exercise.create({
    name: "DeadLift",
    category: "back",
    equipment: ["barbell", "weights", "squat wrack"],
    tipsAndTricks: [
      "use controlled movements",
      "avoid jerking your back",
      "keep your back straight",
    ],
    embedId: "-4qRntuXBSc",
  });

  const cableKickback = await Exercise.create({
    name: "Cable Kickback",
    category: "glutes",
    equipment: ["cable machine", "ankle fastener"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "dJa_Nf4zdik&t=31s",
  });

  const stepDown = await Exercise.create({
    name: "Step Down",
    category: "glutes",
    equipment: ["Box", "Bench"],
    tipsAndTricks: ["use controlled movements"],
    embedId: "Eerfi7WaiDE",
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
    status: "active",
    workoutTotalWeight: 500,
  });

  await pschest1.addExercises([chest1, chest2, chest5]);
  await pschest2.addExercises([chest3, chest4, chest6]);
  await psback1.addExercises([back1, back2, back5]);
  await psback2.addExercises([back3, back4, back6]);
  await pslegs1.addExercises([legs1, legs2, legs3]);
  await pslegs2.addExercises([legs4, legs5, legs6]);

  // SAMPLE - TO DELETE
  // await workout1.setUser(cherry);
  
  // await workout1.addExercise(chest1);

  // const closed1 = await WorkoutList.findOne({
  //   where: {
  //     exerciseId: 1,
  //     workoutId: 7,
  //   },
  // });

  // await closed1.setUser(cherry);

  // closed1.sets = [{ reps: 3, weight: 40 }];
  // await closed1.save();

  //creating our sprites
  const cat = await Sprite.create({
    name: "cat",
    weightToUnlock: 0,
    isUnlocked: true,
  });

  const dog = await Sprite.create({
    name: "dog",
    weightToUnlock: 0,
    isUnlocked: true,
  });
  const redHatBoy = await Sprite.create({
    name: "redHatBoy",
    weightToUnlock: 0,
    isUnlocked: true,
  });

  const cuteGirl = await Sprite.create({
    name: "cuteGirl",
    weightToUnlock: 1000,
  });
  const adventureBoy = await Sprite.create({
    name: "adventureBoy",
    weightToUnlock: 2000,
  });
  const zombie = await Sprite.create({
    name: "zombie",
    weightToUnlock: 4000,
  });

  const ninjaGirl = await Sprite.create({
    name: "ninjaGirl",
    weightToUnlock: 8000,
  });
  const jackOLantern = await Sprite.create({
    name: "jackOLantern",
    weightToUnlock: 16000,
  });

  const ninjaBoy = await Sprite.create({
    name: "ninjaBoy",
    weightToUnlock: 32000,
  });

  const adventureGirl = await Sprite.create({
    name: "adventureGirl",
    weightToUnlock: 64000,
  });
  const dino = await Sprite.create({
    name: "dino",
    weightToUnlock: 128000,
  });
  const robot = await Sprite.create({
    name: "robot",
    weightToUnlock: 256000,
  });
  const santa = await Sprite.create({
    name: "santa",
    weightToUnlock: 512000,
  });
  const knight = await Sprite.create({
    name: "theKnight",
    weightToUnlock: 1024000,
  });

  await cat.setUser(cherry);
  await dog.setUser(ryan);
  await redHatBoy.setUser(admin);
  await dog.setUser(nicole);
  await cat.setUser(kyle);

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
