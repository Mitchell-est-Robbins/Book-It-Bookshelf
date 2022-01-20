const router = require('express').Router();


const User = require('./user');
const Book = require('./Book');



//Associations setup https://sequelize.org/master/manual/assocs.html
User.hasMany(Book, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Book.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { User, Book };
