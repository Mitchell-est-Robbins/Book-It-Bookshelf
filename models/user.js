const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}


User.init({
    /*
    *   TODO: Add Data 
    *   TODO: Add hooks
    *   TODO: Add dependencies
    */
    
    hooks: {
        //...
    },





});

module.exports = User;