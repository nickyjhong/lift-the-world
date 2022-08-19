const router = require('express').Router();
const {models: {Exercise}} = require('../db/');

router.get('/:id', async (req, res, next) => {
    try {
        const exercise = await Exercise.findByPk(req.params);
        res.send(exercise);
        
    } catch (error) {
        next(error)
    }
});