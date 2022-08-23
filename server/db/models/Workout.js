const Sequelize = require('sequelize');
const db = require('../db');

const Workout = db.define('workout', {
  status: {
    type: Sequelize.ENUM('active', 'closed'),
    defaultValue: 'active',
  },
  workoutTotalWeight: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Workout;
