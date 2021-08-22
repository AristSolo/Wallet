'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Business extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Business.belongsTo(models.User,{
        foreignKey: "user_id",
        as: "user",
      });
    }
  };
  Business.init({
    business_name: DataTypes.STRING,
    location: DataTypes.STRING,
    business_account: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Business',
  });
  return Business;
};