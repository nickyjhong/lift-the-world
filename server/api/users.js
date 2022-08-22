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
