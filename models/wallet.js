'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wallet.belongsTo(models.Business,{
        foreignKey: "business_id",
        as: "business_id",
      });
      //
      Wallet.belongsTo(model.User,{
        foreignKey: "user_id",
        as: "user_id"
      })
    }
  };
  Wallet.init({
    name: DataTypes.STRING,
    income: DataTypes.INTEGER,
    expense: DataTypes.INTEGER,
    business_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
};