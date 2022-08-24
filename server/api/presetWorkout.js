const router = require('express').Router();
const {
  models: { Workout, Exercise },
} = require('../db/');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    console.log("IM IN THE ROUTE")
    const workouts = await Workout.findAll({where:{
      isPreset: true,
    },
    include: [{model: Exercise}]
  });
    res.send(workouts);
    
  } catch (error) {
    next(error);
  }
})