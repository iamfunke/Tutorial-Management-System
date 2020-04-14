'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tutorial = sequelize.define('Tutorial', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    published: DataTypes.INTEGER
  }, {});
  Tutorial.associate = function(models) {
    // associations can be defined here
  };
  return Tutorial;
};