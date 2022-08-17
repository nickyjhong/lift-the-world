//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Exercises = require('./models/Exercises');
const Sets = require('./models/Sets');
const Workouts = require('./models/Workouts');

//associations could go here!
User.hasMany(Workouts);
Workouts.belongsTo(User);
Exercises.belongsToMany(Workouts, {through: WorkoutList});
Exercises.hasMany(Sets);

module.exports = {
  db,
  models: {
    User,
    Exercises,
    Sets,
    Workouts
  },
}
