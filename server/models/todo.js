const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Todo extends Model {}

Todo.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    CreationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    ExpiringDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},{sequelize, name: 'Todos', timestamps: false, });

module.exports.TodoModel = Todo