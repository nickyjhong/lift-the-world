const Sequelize = require('sequelize')
const db = require('../db')

const WorkoutList = db.define('workoutlist', {
    quantity:{
        type: Sequelize.INTEGER
    }
});

module.exports = WorkoutList;