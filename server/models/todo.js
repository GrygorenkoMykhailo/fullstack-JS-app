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

module.exports.AddTodo = async(title,description,creationDate, expiringDate, userId) => {
    await Todo.create({
        Title: title,
        Description: description,
        CreationDate: creationDate,
        ExpiringDate: expiringDate,
        UserId: userId,
    })
}

module.exports.UpdateTodo = async (id,title,description,expiringDate) => {
    console.log('id = ' +  id, 't = ' +  title, 'd = ' + description, 'e = ' + expiringDate);

    await Todo.update({
        Title: title,
        Description: description,
        ExpiringDate: expiringDate,
    },{
        where: {
            Id: id,
        },
    },)
}

module.exports.DeleteTodo = async(id) => {
    await Todo.destroy({
        where: {
            Id: id
        }
    })
}