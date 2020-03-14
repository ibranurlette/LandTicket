'use strict';
module.exports = (sequelize, DataTypes) => {
  const train = sequelize.define('train', {
    nameTrain: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    typeTrain_id: DataTypes.INTEGER,
    dateStart: DataTypes.STRING,
    startStation: DataTypes.STRING,
    startTime: DataTypes.TIME,
    destination: DataTypes.STRING,
    arrivalTime: DataTypes.TIME,
    price: DataTypes.STRING,
    qty: DataTypes.STRING
  }, {});
  train.associate = function(models) {
    train.belongsTo(models.type_Train, {
      as: "typeTrain",
      foreignKey: "typeTrain_id"
    });
    train.belongsTo(models.user, {
      as: "user",
      foreignKey: "user_id"
    });
  };
  return train;
};