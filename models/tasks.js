'use strict';

var Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Tasks = sequelize.define('Tasks', {
    name: {
      type: DataTypes.STRING
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date: {
      type: DataTypes.TIME
    }
  }, {
    // freezeTableName: true,

    // // define the table's name
    // tableName: 'Tasks',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Tasks;
};