const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router;
const { requireToken, isAdmin } = require('./middleware');


// ADMIN VIEW: RETRIEVE ALL USERS ***requireToken + isAdmin
router.get('/', requireToken, isAdmin, async (req, res, next) => {
  try {
    const users = await User.findAll({
      where: {
        isAdmin: false
      }
    });
    res.send(users);
  } catch (err) {
    next(err);
  }
});

// ALL VIEW: CREATE NEW USER
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const userToken = await newUser.generateToken();
    res.send(userToken);
  } catch (error) {
    next(error);
  }
});