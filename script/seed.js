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
    selectedSprite: "cat",
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
    selectedSprite: "dog",
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
    tipsAndTricks: [
      "keep palms facing away from you",
      "keep chest and core braced",
      "press weights upwards until arms are straight and weights touch above your head",
    ],
    embedId: "5yWaNOvgFCM",
  });
  const chest3 = await Exercise.create({
    name: "Dumbell Flys",
    category: "chest",
    equipment: ["Dumbells", "Bench"],
    tipsAndTricks: [
      "lift arms above the head so they're extended but not locked",
      "slight bend at your elbow, and palms and dumbbells should face each other",
      "lower dumbbells in an arc motion until they're in line with the chest",
    ],
    embedId: "eozdVDA78K0",
  });

  const chest4 = await Exercise.create({
    name: "Decline Bench Press",
    category: "chest",
    equipment: ["Press Machine or Decline bench", "weights"],
    tipsAndTricks: [
      "keeps palms facing forward and arms slightly wider than shoulder-width apart",
      "lower until bar touches your mid chest",
    ],
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
    tipsAndTricks: [
      "tilt torso at a 30-40 degree angle instead of standing straight up",
      "use slwo and controlled movements",
    ],
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
    tipsAndTricks: [
      "don't pull the handle to your neck",
      "don't lean back too far, you only want to be slightly behind vertical",
    ],
    embedId: "roCP6wCXPqo",
  });
  const back3 = await Exercise.create({
    name: "Bent Over Row",
    category: "back",
    equipment: ["dumbbells or barbell"],
    tipsAndTricks: [
      "keep palms facing down",
      "lift barbell towards you while keepting torso stationary",
      "lower barbell back to starting postition using slow and controlled movements",
    ],
    embedId: "FWJR5Ve8bnQ",
  });
  const back4 = await Exercise.create({
    name: "Shoulder Shrugs",
    category: "back",
    equipment: ["dumbbells or barbell"],
    tipsAndTricks: [
      "keep chin up, neck straight and face straight ahead",
      "bring shoulders as high up towards your ears as you can",
      "repeat using slow and controlled movements",
    ],
    embedId: "cJRVVxmytaM",
  });
  const back5 = await Exercise.create({
    name: "Hammer Curl",
    category: "biceps",
    equipment: ["dumbells"],
    tipsAndTricks: [
      "stand or kneel with legs about hips-width distance apart",
      "lift weights to shoulders, keep shoulders down and back",
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
    tipsAndTricks: [
      "stand with feet shoulder-width apart",
      "push hips back and lower dumbbells while keeping legs straight or slightly bent",
    ],
    embedId: "7AaaYhMqTws",
  });
  const legs3 = await Exercise.create({
    name: "Leg curl",
    category: "legs",
    equipment: ["leg curl machine"],
    tipsAndTricks: [
      "maintain neutral spine - don't put your head too high or too low",
      "use slow and controlled movements",
    ],
    embedId: "fK0uZ3KRZRI",
  });
  const legs4 = await Exercise.create({
    name: "Leg extension",
    category: "legs",
    equipment: ["leg extension machine"],
    tipsAndTricks: [
      "concentrate on contracting your quads to move the weight rather than yanking your feet up",
      "use slow and controlled movements",
    ],
    embedId: "8Jqof7z3QYM",
  });
  const legs5 = await Exercise.create({
    name: "Bulgarian Split Squats",
    category: "glutes",
    equipment: ["Dumbell or barbell", "bench"],
    tipsAndTricks: [
      "stand 2-3 feet in front of knee-high bench",
      "keep torso upright, slowly lower knee towards floor",
      "reverse the move and return to starting position",
    ],
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
    tipsAndTricks: [
      "keep hands shoulder-width apart",
      "use controlled movements",
    ],
    embedId: "brhRXlOhsAM",
  });

  const inclinedumbellcurl = await Exercise.create({
    name: "Incline Dumbell Curl",
    category: "biceps",
    equipment: ["bench", "dumbells"],
    tipsAndTricks: [
      "don't use momentum to lift the weights",
      "use controlled movements",
    ],
    embedId: "soxrZlIl35U",
  });

  const diamondPushups = await Exercise.create({
    name: "Diamond Pushups",
    category: "triceps",
    equipment: ["the floor", "a mat"],
    tipsAndTricks: [
      "put your hands in a diamond position",
      "keep core tight and straight like a plank",
      "use controlled movements",
    ],
    embedId: "J0DnG1_S92I",
  });

  const kickBacks = await Exercise.create({
    name: "KickBacks",
    category: "triceps",
    equipment: ["dumbells", "bench"],
    tipsAndTricks: [
      "bend forward slightly at waist so torso is almost parallel to the floor",
      "engage your core and keep head, neck and spine inline",
      "use controlled movements",
    ],
    embedId: "ZO81bExngMI",
  });

  const tricepsExtension = await Exercise.create({
    name: "Triceps Extension",
    category: "triceps",
    equipment: ["dumbell", "bench"],
    tipsAndTricks: [
      "slowly bend your elbows and lower the weight behind your head",
      "keep trunk upright and core engaged",
      "the weight should follow the path of your spine",
    ],
    embedId: "nRiJVZDpdL0",
  });

  const frontSquat = await Exercise.create({
    name: "Front Squat",
    category: "glutes",
    equipment: ["barbell", "weights", "squat wrack"],
    tipsAndTricks: [
      "keep toes pointed slightly outwards and make sure knees track in the direction the toes point",
      "keep chest up and elbows high",
    ],
    embedId: "wyDbagKS7Rg",
  });

  const goodMorning = await Exercise.create({
    name: "Good Morning",
    category: "legs",
    equipment: ["barbell", "weights"],
    tipsAndTricks: [
      "keep hips back and knees slightly bent",
      "lower torso until your spine is almost parallel to floor, maintaining a slight arch in lower back",
      "keep core engaged, lift torso to return to starting positon",
    ],
    embedId: "vKPGe8zb2S4",
  });

  const lunge = await Exercise.create({
    name: "Lunge",
    category: "legs",
    equipment: ["barbell", "weights", "dumbells"],
    tipsAndTricks: [
      "lunge as far as required for your front knee to reach 90 degrees",
      "use controlled movements",
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
      "twist as far as you can comfortably",
      "use controlled movements",
    ],
    embedId: "wkD8rjkodUI",
  });

  const deadBug = await Exercise.create({
    name: "Dead Bug",
    category: "core",
    equipment: ["floor mat"],
    tipsAndTricks: [
      "lie down on back, bend legs and stabilize lower body",
      "exhale as your rise, inhale as you lower",
    ],
    embedId: "8NBNM8haZx0",
  });

  const woodChop = await Exercise.create({
    name: "Half-kneeling Wood Chop",
    category: "core",
    equipment: ["dumbell", "kettle bell", "floor mat"],
    tipsAndTricks: [
      "keep feet on ground shoulder-width apart",
      "use slow and controlled movements",
    ],
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
      "don't go so far that you strain your shoulders",
      "use controlled movements",
    ],
    embedId: "wjUmnZH528Y",
  });

  const deadLift = await Exercise.create({
    name: "DeadLift",
    category: "back",
    equipment: ["barbell", "weights", "squat wrack"],
    tipsAndTricks: [
      "keep your back straight",
      "avoid jerking your back",
      "use controlled movements",
    ],
    embedId: "-4qRntuXBSc",
  });

  const cableKickback = await Exercise.create({
    name: "Cable Kickback",
    category: "glutes",
    equipment: ["cable machine", "ankle fastener"],
    tipsAndTricks: [
      "keep knees slightly bent",
      "turning leg out going back can be helpful",
      "use slow and controlled movements",
    ],
    embedId: "dJa_Nf4zdik&t=31s",
  });

  const stepDown = await Exercise.create({
    name: "Step Down",
    category: "glutes",
    equipment: ["Box", "Bench"],
    tipsAndTricks: [
      "control body weight and keep balance",
      "slowly move body down and keep body aligned",
    ],
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
  await workout1.setUser(cherry);
  await workout2.setUser(cherry);

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
    weightToUnlock: 0
  });

  const dog = await Sprite.create({
    name: "dog",
    weightToUnlock: 0,
  });
  const redHatBoy = await Sprite.create({
    name: "redHatBoy",
    weightToUnlock: 0,
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
    name: "knight",
    weightToUnlock: 1024000,
  });

  //await cat.setUser(cherry);
  await cherry.addSprite(cat);
  await cherry.addSprite(dog);
  await cherry.addSprite(redHatBoy);
  await cherry.addSprite(cuteGirl);
  await cherry.addSprite(adventureBoy);
  await cherry.addSprite(zombie);
  await cherry.addSprite(ninjaGirl);
  await cherry.addSprite(jackOLantern);
  await cherry.addSprite(ninjaBoy);
  await cherry.addSprite(adventureGirl);
  await cherry.addSprite(dino);
  await cherry.addSprite(robot);
  await cherry.addSprite(santa);
  await cherry.addSprite(knight);
  await ryan.addSprite(cat);
  await ryan.addSprite(dog);
  await ryan.addSprite(redHatBoy);
  await admin.addSprite(cat);
  await admin.addSprite(dog);
  await admin.addSprite(redHatBoy);
  await nicole.addSprite(cat);
  await nicole.addSprite(dog);
  await nicole.addSprite(redHatBoy);
  await kyle.addSprite(cat);
  await kyle.addSprite(dog);
  await kyle.addSprite(redHatBoy);

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
