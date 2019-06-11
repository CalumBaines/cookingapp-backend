
module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('Recipe', {
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        imageUrl: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {         // User belongsTo recipe 1:1
                model: 'Users',
                key: 'id'
            }
        }
    })
    return Recipe
}