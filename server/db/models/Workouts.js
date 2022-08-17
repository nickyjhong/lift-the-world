const Sequelize = require('sequelize')
const db = require('../db')

const Workouts = db.define('workout', {
    status: {
        type: Sequelize.ENUM('active', 'closed'),
        defaultValue: 'active'
    }
})


module.exports = Workouts;

