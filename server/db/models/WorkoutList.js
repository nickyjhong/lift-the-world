const Sequelize = require('sequelize')
const db = require('../db')

const WorkoutList = db.define('workoutlist', {
    sets:{
        type: Sequelize.JSONB,
        defaultValue: []
    }
});

module.exports = WorkoutList;