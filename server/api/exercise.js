const router = require("express").Router();
const {
  models: { Exercise },
} = require("../db/");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const exercise = await Exercise.findAll();
    res.send(exercise);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const exercise = await Exercise.findByPk(req.params.id);
    res.send(exercise);
  } catch (error) {
    next(error);
  }
});

router.get("/:category", async (req, res, next) => {
  try {
    const exercises = await Exercise.findAll({
      where: { category: req.params.category },
    });
    res.send(exercises);
  } catch (error) {
    next(error);
  }
});
