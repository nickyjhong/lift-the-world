const Sequelize = require("sequelize");
const db = require("../db");

const Exercise = db.define("exercise", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.ENUM("chest", "back", "arms", "legs", "core"),
  },
  equipment: {
    type: Sequelize.STRING,
    defaultValue: "No Equipment Needed",
  },
  tipsAndTricks: {
    type: Sequelize.STRING,
  },
  embedId: {
    type: Sequelize.STRING,
  },
});

module.exports = Exercise;
