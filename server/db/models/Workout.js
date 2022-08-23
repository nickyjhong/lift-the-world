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
  presetId: {
    type: Sequelize.INTEGER,
    defaultValue: null,
    validate: {
      min: 1,
      max: 6
    }
  }
});

module.exports = Workout;
