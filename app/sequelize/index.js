const Sequelize = require('sequelize');
const sequelize = new Sequelize('cars_node', 'root', 'root', {
  host: 'mysqldb',
  dialect: 'mysql'
});
var car = require("./models/car");

module.exports = {
  Car: car(sequelize, Sequelize.DataTypes),
}