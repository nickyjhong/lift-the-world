const Sequelize = require('sequelize')
const db = require('../db')

const Workout = db.define('workout', {
    status: {
        type: Sequelize.ENUM('active', 'closed'),
        defaultValue: 'active'
    }
})


module.exports = Workout;

