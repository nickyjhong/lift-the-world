const {
  db,
  models: { User, Exercise, Workout, Sprite },
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
    selectedSprite: "dog",
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

  // creating exercises for presets
  const chest1 = await Exercise.create({
    name: "Bench Press",
    category: "chest",
    equipment: ["barbell", "weights", "bench"],
    tipsAndTricks: [
      "keep shoulders back",
      "don't bounce off your chest",
      "use a spotter if needed",
    ],
    embedId: "gRVjAtPip0Y",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2289486/image_iphone.jpg",
  });

  const chest2 = await Exercise.create({
    name: "Shoulder Press",
    category: "chest",
    equipment: ["dumbbell or barbell"],
    tipsAndTricks: [
      "keep palms facing away from you",
      "keep chest and core braced",
      "press weights upwards until arms are straight and weights touch above your head",
    ],
    embedId: "5yWaNOvgFCM",
    image: "https://www.burnthefatinnercircle.com/members/images/1302.jpg",
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
    image: "https://www.burnthefatinnercircle.com/members/images/1804.jpg",
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
    image:
      "https://static.strengthlevel.com/images/illustrations/decline-dumbbell-fly-1000x1000.jpg",
  });

  const chest5 = await Exercise.create({
    name: "Bicep Curls",
    category: "triceps",
    equipment: ["dumbell or barbell", "bench"],
    tipsAndTricks: [
      "utilize full range of motion",
      "move slow and controlled movements",
    ],
    embedId: "QS5GxWjyVX0",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2287282/image_iphone.jpg",
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
    image:
      "https://static.strengthlevel.com/images/illustrations/tricep-rope-pushdown-1000x1000.jpg",
  });

  const back1 = await Exercise.create({
    name: "Lat Pulldown",
    category: "back",
    equipment: ["pulldown machine"],
    tipsAndTricks: [
      "use slow and controlled movements",
      "keep shoulders back",
      "keep back straight",
    ],
    embedId: "Z_3xHwuO8Tk",
    image:
      "http://cdn.shopify.com/s/files/1/0250/0362/2496/articles/5f19b4eff633a10684ef6193_wide-grip-lat-pulldown-anabolic-aliens.png?v=1644918521",
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
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2124438/image_iphone.jpg",
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
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2287167/image_iphone.jpg",
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
    image: "https://www.burnthefatinnercircle.com/members/images/1893.jpg",
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
    image:
      "https://static.strengthlevel.com/images/illustrations/hammer-curl-1000x1000.jpg",
  });
  const back6 = await Exercise.create({
    name: "Preacher Curl",
    category: "biceps",
    equipment: ["dumbell or barbell", "curling bench"],
    tipsAndTricks: [
      "utilize full range of motion",
      "move slow and controlled movements",
    ],
    embedId: "fIWP-FRFNU0",
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2453802/image_iphone.jpg",
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
    image:
      "https://static.strengthlevel.com/images/illustrations/squat-1000x1000.jpg",
  });

  const legs2 = await Exercise.create({
    name: "Romanian Deadlift",
    category: "legs",
    equipment: ["dumbbell or barbell"],
    tipsAndTricks: [
      "stand with feet shoulder-width apart",
      "push hips back and lower dumbbells while keeping legs straight or slightly bent",
    ],
    embedId: "7AaaYhMqTws",
    image:
      "http://cdn.shopify.com/s/files/1/0250/0362/2496/articles/5e595712f146e8e14db4ca6f_dumbbell-romanian-deadlift-exercise-anabolic-aliens-p-500.png?v=1644927440",
  });

  const legs3 = await Exercise.create({
    name: "Leg Curl",
    category: "legs",
    equipment: ["leg curl machine"],
    tipsAndTricks: [
      "maintain neutral spine - don't put your head too high or too low",
      "use slow and controlled movements",
    ],
    embedId: "fK0uZ3KRZRI",
    image:
      "https://static.strengthlevel.com/images/illustrations/lying-leg-curl-1000x1000.jpg",
  });
  const legs4 = await Exercise.create({
    name: "Leg Extension",
    category: "legs",
    equipment: ["leg extension machine"],
    tipsAndTricks: [
      "concentrate on contracting your quads to move the weight rather than yanking your feet up",
      "use slow and controlled movements",
    ],
    embedId: "8Jqof7z3QYM",
    image:
      "https://i.pinimg.com/originals/19/77/ae/1977aec3424113ef355b1b3bca2655bc.jpg",
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
    image: "https://www.burnthefatinnercircle.com/members/images/1224.jpg",
  });

  const legs6 = await Exercise.create({
    name: "Leg Raises",
    category: "core",
    equipment: ["floor mat"],
    tipsAndTricks: ["engage your core", "use controlled movements"],
    embedId: "JB2oyawG9KI",
    image:
      "https://fitnessprogramer.com/wp-content/uploads/2021/05/Captains-Chair-Leg-Raise.gif",
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
    image:
      "https://static.strengthlevel.com/images/illustrations/barbell-curl-1000x1000.jpg",
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
    image:
      "https://qph.cf2.quoracdn.net/main-qimg-ba713d8fa1c44cd4b214fa1a6b32e094-pjlq",
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
    image: "https://www.burnthefatinnercircle.com/members/images/1592.jpg",
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
    image:
      "https://www.aleanlife.com/wp-content/uploads/2021/01/diamond-push-up-form-1200x675.jpg",
  });

  const kickBacks = await Exercise.create({
    name: "Kickbacks",
    category: "triceps",
    equipment: ["dumbells", "bench"],
    tipsAndTricks: [
      "bend forward slightly at waist so torso is almost parallel to the floor",
      "engage your core and keep head, neck and spine inline",
      "use controlled movements",
    ],
    embedId: "ZO81bExngMI",
    image:
      "https://static.strengthlevel.com/images/illustrations/dumbbell-tricep-kickback-1000x1000.jpg",
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
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2287384/image_iphone.jpg",
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
    image: "http://www.burnthefatinnercircle.com/members/images/1248.jpg",
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
    image:
      "https://static.strengthlevel.com/images/illustrations/good-morning-1000x1000.jpg",
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
    image: "https://www.burnthefatinnercircle.com/members/images/2012.png",
  });

  const forearmPlank = await Exercise.create({
    name: "Forearm Plank",
    category: "core",
    equipment: ["workout mat", "your body"],
    tipsAndTricks: ["activate your core", "breath through the exercise"],
    embedId: "pSHjTRCQxIw",
    image: "/images/ForearmPlank.png",
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
    image:
      "https://s3.amazonaws.com/prod.skimble/assets/2287890/image_iphone.jpg",
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
    image:
      "https://images.assetsdelivery.com/compings_v2/lioputra/lioputra2104/lioputra210400056.jpg",
  });

  const woodChop = await Exercise.create({
    name: "Half-Kneeling Wood Chop",
    category: "core",
    equipment: ["dumbell", "kettle bell", "floor mat"],
    tipsAndTricks: [
      "keep feet on ground shoulder-width apart",
      "use slow and controlled movements",
    ],
    embedId: "SfTBo2Tjl7M",
    image:
      "https://fitnessandhealthpromotion.ca/wp-content/uploads/2021/09/half-kneeling-woodchop.jpg",
  });

  const bodySaw = await Exercise.create({
    name: "Body Saw",
    category: "core",
    equipment: ["floor mat", "floor sliders"],
    tipsAndTricks: ["use controlled movements", "squeeze your core"],
    embedId: "oSNHVD0zT3Q",
    image:
      "https://t4.ftcdn.net/jpg/04/41/56/51/360_F_441565158_qbxu8tdsVAQ0FryS1UjagNURfJnJAkCo.jpg",
  });

  const dips = await Exercise.create({
    name: "Dips",
    category: "chest",
    equipment: ["Dip wrack", "assisted dip machine"],
    tipsAndTricks: [
      "don't go so far that you strain your shoulders",
      "use controlled movements",
    ],
    embedId: "wjUmnZH528Y",
    image: "https://www.burnthefatinnercircle.com/members/images/1093.jpg",
  });

  const deadLift = await Exercise.create({
    name: "Deadlift",
    category: "back",
    equipment: ["barbell", "weights", "squat wrack"],
    tipsAndTricks: [
      "keep your back straight",
      "avoid jerking your back",
      "use controlled movements",
    ],
    embedId: "-4qRntuXBSc",
    image:
      "https://static.strengthlevel.com/images/illustrations/deadlift-1000x1000.jpg",
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
    image:
      "https://static.strengthlevel.com/images/illustrations/cable-kickback-1000x1000.jpg",
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
    image: "https://www.burnthefatinnercircle.com/members/images/2008.png",
  });

  const flatLegRaise = await Exercise.create({
    name: "Flat Leg Raise",
    category: "core",
    equipment: ["none"],
    tipsAndTricks: ["keep core tight", "slowly move legs down with control"],
    embedId: "BUq5RTDXeZ0",
    image: "/images/FlatLegRaises.png",
  });

  const flatKneeRaise = await Exercise.create({
    name: "Flat Knee Raise",
    category: "core",
    equipment: ["none"],
    tipsAndTricks: ["keep core tight", "slowly move legs with control"],
    embedId: "xqTh6NqbAtM",
    image: "/images/FlatKneeRaise.png",
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

  //creating our sprites
  const cat = await Sprite.create({
    name: "cat",
    isDefault: true,
  });
  const dog = await Sprite.create({
    name: "dog",
    isDefault: true,
  });
  const redHatBoy = await Sprite.create({
    name: "redHatBoy",
  });
  const cuteGirl = await Sprite.create({
    name: "cuteGirl",
  });
  const adventureBoy = await Sprite.create({
    name: "adventureBoy",
  });
  const zombie = await Sprite.create({
    name: "zombie",
  });
  const ninjaGirl = await Sprite.create({
    name: "ninjaGirl",
  });
  const jackOLantern = await Sprite.create({
    name: "jackOLantern",
  });
  const ninjaBoy = await Sprite.create({
    name: "ninjaBoy",
  });
  const adventureGirl = await Sprite.create({
    name: "adventureGirl",
  });
  const dino = await Sprite.create({
    name: "dino",
  });
  const robot = await Sprite.create({
    name: "robot",
  });
  const santa = await Sprite.create({
    name: "santa",
  });
  const knight = await Sprite.create({
    name: "knight",
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
  await admin.addSprite(cat);
  await admin.addSprite(dog);
  await nicole.addSprite(cat);
  await nicole.addSprite(dog);
  await kyle.addSprite(cat);
  await kyle.addSprite(dog);

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
