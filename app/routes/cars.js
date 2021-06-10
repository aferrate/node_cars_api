var router = require('express').Router();

router.get('/search', function(req, res) {
    res.json({ message: 'Vas a buscar una car' });
});

router.get('/', function(req, res) {
    res.json({ message: 'Estás conectado a la API. Recurso: cars' });
});

router.get('/:id', function(req, res) {
    res.json({ message: 'Vas a obtener la car con id ' + req.params.id });
});

router.post('/', function(req, res) {
    res.json({ message: 'Vas a añadir una car' });
});

router.put('/:id', function(req, res) {
    res.json({ message: 'Vas a actualizar la car con id ' + req.params.id });
});

router.delete('/:id', function(req, res) {
    res.json({ message: 'Vas a borrar la car con id ' + req.params.id});
});

module.exports = router;