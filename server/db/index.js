//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Exercise = require('./models/Exercise');
const Workout = require('./models/Workout');
const WorkoutList = require('./models/WorkoutList');
const Sprite = require('./models/Sprite');

//associations could go here!

Workout.belongsTo(User)
User.hasMany(Workout)

Exercise.belongsToMany(Workout, {through: WorkoutList})
Workout.belongsToMany(Exercise, {through: WorkoutList})

WorkoutList.belongsTo(User)
User.hasMany(WorkoutList)

//this is for all unlocked sprite characters:
Sprite.belongsToMany(User, {through: 'userSprites'});
User.belongsToMany(Sprite, {through: 'userSprites'});

//this is for user selected character:
User.hasOne(Sprite, {
  foreignKey: 'selectedSprite'
});
Sprite.belongsTo(User)

module.exports = {
  db,
  models: {
    User,
    Exercise,
    Workout,
    WorkoutList,
    Sprite
  },
}
