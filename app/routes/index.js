const router = require('express').Router();
const cars = require('./cars');
const sequelize = require('../sequelize');

router.use('/cars', cars);

router.get('/', function (req, res) {
  res.status(200).json({ message: 'connected to our API' });
  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});

module.exports = router;