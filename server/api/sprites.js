const router = require("express").Router();
const {
  models: { User, Sprite },
} = require("../db");
const { requireToken } = require("./middleware");
module.exports = router;

router.get('/selectedSprite', requireToken, async (req, res, next)=>{
    try {
        const user = await User.findByPk(req.user.dataValues.id);
        const sprite = user.selectedSprite;
        res.send(sprite);
    } catch (error) {
        next(error)
    }
})

router.get('/', requireToken, async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.dataValues.id, {
            include: [Sprite]
        });
        res.send(user.dataValues.sprites);
    } catch (error) {
        next(error);
    }
});

router.put('/update', requireToken, async (req, res, next) => {
    try {
        const {name} = req.body;
        const user = await User.findByPk(req.user.dataValues.id);
        await user.update({selectedSprite: name})
        res.send(user.selectedSprite);
    } catch (error) {
        next(error);
    }
})
