const {Recipe} = require('../models');

module.exports = {
    async index (req, res) {
        try {
            console.log(req.query.userId)
            const recipes = await Recipe.findAll({

                where: {
                    userId: req.query.userId
                },
                limit: 10
            })
            // console.log(recipes)
            res.send(recipes);
        } catch(err) {
            console.log(err)
            res.status(500).send({
                message: "an error has occured trying to fetch recipes"
            })
        }
    },
    async post (req, res) {
        try {
            const recipe = await Recipe.create(req.body)
            res.send(recipe);
        } catch(err) {
            console.log(err)
            res.status(500).send({
                message: "an error has occured trying to create recipes"
            })
        }
    },
};
