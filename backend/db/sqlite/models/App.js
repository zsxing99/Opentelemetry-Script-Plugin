const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
    class App extends Model {}

    App.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING, allowNull: false
        },
        version: {
            type: DataTypes.STRING, allowNull: false
        },
        host: {
            type: DataTypes.STRING, allowNull: false
        }
    }, {
        sequelize,
        modelName: 'App'
    });

};
