var router = require('express').Router();
var cars = require('./cars');

router.use('/cars', cars);

router.get('/', function (req, res) {
  res.status(200).json({ message: 'connected to our API' });
});

module.exports = router;