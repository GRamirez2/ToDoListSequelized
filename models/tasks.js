'use strict';
module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define('Tasks', {
    name: DataTypes.STRING,
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: DataTypes.TIMESTAMP
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Tasks;
};