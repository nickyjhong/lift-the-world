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
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ["No Equipment Needed"]
  },
  tipsAndTricks: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    defaultValue: ["Don't hurt yourself"]
  },
  embedId: {
    type: Sequelize.STRING,
  },
});

module.exports = Exercise;
