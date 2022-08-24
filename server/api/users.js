const router = require("express").Router();
const {
  models: { User },
} = require("../db");
module.exports = router;
const { requireToken, isAdmin } = require("./middleware");

// ADMIN VIEW: RETRIEVE ALL USERS ***requireToken + isAdmin
router.get("/", requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    next(err);
  }
});

// RETRIEVES DATA FOR SINGLE USER
router.get("/profile", requireToken, async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.dataValues.id, {
      attributes: ["username", "totalWeight", "level"],
    });
    res.send(user);
  } catch (err) {
    next(err);
  }
});

router.get("/leaders", async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    const sortedUsers = allUsers.sort((a, b) => {
      return a.totalWeight - b.totalWeight;
    });
    const topTen = [];

    if (sortedUsers.length >= 10) {
      console.log("wrong way");
      for (let i = 0; i < 10; i++) {
        topTen.push(sortedUsers[i]);
      }
    } else {
      for (let i = 0; i < sortedUsers.length - 1; i++) {
        topTen.push(sortedUsers[i]);
      }
    }
    res.send(topTen);
  } catch (error) {
    next(error);
  }
});
