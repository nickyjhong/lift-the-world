const Sequelize = require('sequelize')
const db = require('../db')

const Exercises = db.define('exercise', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    category: {
        type: Sequelize.ENUM('chest', 'back', 'arms', 'legs', 'core')
    }
});

module.exports = Exercises;