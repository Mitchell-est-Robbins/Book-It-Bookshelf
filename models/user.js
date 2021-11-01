const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

// TODO: Specify how data will go into database
User.init({
    /*
    *   TODO: Add Data [user]
    *   TODO: Add hooks
    *   TODO: Add dependencies [user.js file]
    */
    
    hooks: {
        //...
    },





});

module.exports = User;