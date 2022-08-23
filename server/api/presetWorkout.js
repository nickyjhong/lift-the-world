const router = require('express').Router();
const {
  models: { Workout },
} = require('../db/');
module.exports = router;

router.get('/:id', async (req, res, next) => {
  try {
    const workout = await Workout.findOne({where:{
      presetId: req.params.id
    }});
    res.send(workout);
    
  } catch (error) {
    next(error);
  }
})