const Sequelize = require('sequelize');
const db = require('../db');

const Workout = db.define('workout', {
  name:{
    type: Sequelize.STRING,
    allowNull:false,
    validate:{
      notEmpty: true
    },
    defaultValue: 'workout'
  },
  status: {
    type: Sequelize.ENUM('active', 'closed'),
    defaultValue: 'active',
  },
  workoutTotalWeight: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  isPreset: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Workout;
