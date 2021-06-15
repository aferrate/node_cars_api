var router = require('express').Router();
var carsController = require ('../controllers/carsController')

router.get('/search', function(req, res) {
    carsController.search(req, res);
});

router.get('/findAll', function(req, res) {
    carsController.findAll(req, res);
});

router.get('find/:id', function(req, res) {
    carsController.find(req, res);
});

router.post('/create', function(req, res) {
    carsController.create(req, res);
});

router.put('/update/:id', function(req, res) {
    carsController.update(req, res);
});

router.delete('/delete/:id', function(req, res) {
    carsController.delete(req, res);
});

module.exports = router;