var models = require("../sequelize/index");

module.exports = {
    findAll: async function(req, res) {
        models.Car.findAll().then(carResponse => {
            res.status(200).json(carResponse);
        }).catch( error => {
            res.status(400).send(error);
        });
    },
    create: async function(req, res) {
        models.Car.create(req.body).then(carResponse => {
            res.status(200).json({item: carResponse, created: true});
        }).catch( error => {
            res.status(400).send(error);
        });
    },
    update: async function(req, res) {
        models.Car.findOne({where: {id: req.body.id_car}}).then(carFound => {
            if(!carFound) {
                res.status(200).json({message: "no car with provided id"})
            }

            models.Car.update(req.body.car, {where: {id: req.body.id_car}}).then(carResponse => {
                res.status(200).json({item: carResponse, updated: true});
            }).catch( error => {
                res.status(400).send(error);
            });
        }).catch( error => {
            res.status(400).send(error);
        });
    },
    destroy: async function(req, res) {
        models.Car.findOne({where: {id: req.body.id_car}}).then(carFound => {
            if(!carFound) {
                res.status(200).json({message: "no car with provided id"})
            }

            carFound.destroy().then(carResponse => {
                res.status(200).json({item: carResponse, deleted: true});
            }).catch( error => {
                res.status(400).send(error);
            });
        }).catch( error => {
            res.status(400).send(error);
        });
    }
}