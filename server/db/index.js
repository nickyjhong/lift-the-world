//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Exercise = require('./models/Exercise');
const Set = require('./models/Set');
const Workout = require('./models/Workout');
const WorkoutList = require('./models/WorkoutList');

//associations could go here!

Workout.belongsTo(User)
User.hasMany(Workout)
Exercise.hasMany(Set)
Set.hasOne(Exercise)
Exercise.belongsToMany(Workout, {through: WorkoutList})
Workout.belongsToMany(Exercise, {through: WorkoutList})

module.exports = {
  db,
  models: {
    User,
    Exercise,
    Set,
    Workout,
    WorkoutList
  },
}
