const router = require('express').Router();
const {
  models: { Workout },
} = require('../db/');
const Exercise = require('../db/models/Exercise');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const workouts = await Workout.findAll({where:{
      isPreset: true,
    }
  });
    res.send(workouts);
    
  } catch (error) {
    next(error);
  }
})