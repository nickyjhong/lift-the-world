const Sequelize = require('sequelize')
const db = require('../db')

const Exercise = db.define('exercise', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    category: {
        type: Sequelize.ENUM('chest', 'back', 'arms', 'legs', 'core')
    },
    equipmentNeeded: {
        type: Sequelize.STRING
    },
    tipsAndTricks: {
        type: Sequelize.STRING
    },
    youtubeLink: {
        type: Sequelize.STRING,
        validate: {
            isUrl: true
        }
    }
});

module.exports = Exercise;