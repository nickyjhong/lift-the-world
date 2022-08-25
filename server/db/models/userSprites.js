const Sequelize = require('sequelize');
const db = require('../db');

const userSprites = db.define('userSprites',{});

module.exports = userSprites;