const sequelize = require('./sequelize');
const {UserModel} = require('../models/user')
const {TodoModel} = require('../models/todo')

module.exports.initialize = async(callback) => {
    UserModel.hasMany(TodoModel, {as: 'Todos', foreignKey: 'UserId'});
    TodoModel.belongsTo(UserModel, {as: 'User', foreignKey: 'UserId'});

    await sequelize.sync({alter: true});

    callback();
}