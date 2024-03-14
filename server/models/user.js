const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class User extends Model {}

User.init({
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    Username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING,
        unique: 'uq_user_email',
        allowNull: false,
    },
    Salt: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    HashedPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {sequelize, name: 'Users', timestamps: false, })

module.exports.UserModel = User

module.exports.getUserWithTodos = async function(id) {
    return await User.findByPk(id, {
        include: 'Todos',
    })
}

module.exports.addUser = async function(username,email,salt,hash){
    const user = await User.create({
        Username: username,
        Email: email,
        Salt: salt,
        HashedPassword: hash,
    })
    return user.Id;
}

module.exports.userExists = async function(email){
    const user = await User.findOne({
        where: {
            Email: email,
        }
    })

    return user === null ? false 
                         : true
}

module.exports.getUser = async function(email){
    const user = await User.findOne({
        where: {
            Email: email
        },
    })

    return user;
}