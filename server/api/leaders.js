const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    const sortedUsers = allUsers.sort((a, b) => {
      return b.totalWeight - a.totalWeight;
    });
    const topTen = [];

    if (sortedUsers.length >= 10) {
      for (let i = 0; i < 10; i++) {
        topTen.push(sortedUsers[i]);
      }
    } else {
      for (let i = 0; i < sortedUsers.length; i++) {
        topTen.push(sortedUsers[i]);
      }
    }
    res.send(topTen);
  } catch (error) {
    next(error);
  }
});
