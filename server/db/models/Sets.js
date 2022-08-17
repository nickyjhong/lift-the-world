const Sequelize = require('sequelize')
const db = require('../db')

const Sets = db.define('set', {
    date: {
        type: Sequelize.DATE,
    },
    reps: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1
        }
    },
    weight: {
        type: Sequelize.INTEGER,
        validate: {
            min: 1,
            max: 999
        }
    }
})

module.exports = Sets;