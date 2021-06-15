var models = require("../sequelize/index");

module.exports = {
    findAll: async function(req, res) {
        models.Car.findAll().then(carResponse => {
            res.status(200).json(carResponse);
        }).catch( error => {
            res.status(400).send(error);
        });
    }
}