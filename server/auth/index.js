const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const { Op } = require("sequelize");
module.exports = router;

router.post("/login", async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body) });
  } catch (err) {
    next(err);
  }
});

router.post("/signup", async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    let sameEmail = await User.findOne({
      where: {
        email: {
          [Op.iLike]: `%${email}%`,
        },
      },
    });

    let sameUsername = await User.findOne({
      where: {
        username: {
          [Op.iLike]: `%${username}%`,
        },
      },
    });

    if (!sameEmail && !sameUsername) {
      const user = await User.create({ username, email, password });
      res.send({ token: await user.generateToken() });
    } else {
      res.status(401).send("User already exists");
    }
  } catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    } else {
      next(err);
    }
  }
});

router.get("/me", async (req, res, next) => {
  try {
    res.send(await User.findByToken(req.headers.authorization));
  } catch (ex) {
    next(ex);
  }
});
