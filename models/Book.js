const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
//Extending Model to represent books in the database
class Book extends Model {}
//Defining book with its attributes (id, post_content, user_id, date_created, and likes)
Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
        //stretch... string is for URL needed to get a picture
    // picture: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "book",
  }
);

module.exports = Book;
