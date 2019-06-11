const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
    config.db.database,
    config.db.user,
    config.db.password,
    config.db.options,
)

fs
    .readdirSync(__dirname)
    .filter((file) =>
        file !== 'index.js'
    )
    .forEach((file) => {
        const model = sequelize.import(path.join(__dirname, file))
        db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = sequelize

// db.Users = require('../models/User.js')(sequelize, Sequelize);  
// db.Recipes = require('../models/Recipes.js')(sequelize, Sequelize);  

// db.Recipes.belongsTo(db.Users);  
// db.Users.hasMany(db.Recipes);

// console.log(db)

module.exports = db