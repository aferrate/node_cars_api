var router = require('express').Router();
var carsController = require ('../controllers/carsController')

router.get('/findAll', function(req, res) {
    carsController.findAll(req, res);
});

router.get('/search', function(req, res) {
    carsController.searchByField(req, res);
});

router.get('/findAllEnabled', function(req, res) {
    carsController.findAllEnabled(req, res);
});

router.get('/findBySlug', function(req, res) {
    carsController.findBySlug(req, res);
});

router.get('/findById', function(req, res) {
    carsController.findById(req, res);
});

router.post('/create', function(req, res) {
    carsController.create(req, res);
});

router.put('/update', function(req, res) {
    carsController.update(req, res);
});

router.delete('/delete', function(req, res) {
    carsController.destroy(req, res);
});

module.exports = router;