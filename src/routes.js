const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');
const RecipesController = require('./controllers/RecipesController');

module.exports = (app) => {
    app.post('/register', 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register
    ),
    app.post('/login', 
        AuthenticationController.login
    ),
    app.get('/recipes', 
        RecipesController.index,
    ),
    app.post('/recipes', 
        RecipesController.post
    )
}