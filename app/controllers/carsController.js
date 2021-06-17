var models = require("../sequelize/index");
const { Op } = require("sequelize");

module.exports = {
    findAll: async function(req, res) {
        models.Car.findAll().then(carResponse => {
            res.status(200).json(carResponse);
        }).catch( error => {
            res.status(400).send(error);
        });
    },
    searchByField: async function(req, res) {
        switch (req.body.field)
        {
            case "model":
                models.Car.findAll({where: {model: {[Op.like]: "%" + req.body.search + "%"}}}).then(carResponse => {
                    res.status(200).json(carResponse);
                }).catch( error => {
                    res.status(400).send(error);
                });

                break;
            case "mark":
                models.Car.findAll({where: {mark: {[Op.like]: "%" + req.body.search + "%"}}}).then(carResponse => {
                    res.status(200).json(carResponse);
                }).catch( error => {
                    res.status(400).send(error);
                });

                break;
            case "year": 
                models.Car.findAll({where: {year: req.body.search}}).then(carResponse => {
                    res.status(200).json(carResponse);
                }).catch( error => {
                    res.status(400).send(error);
                });

                break;
            default: 
                res.status(200).json({message: "no valid field"});
                break;
        }
    },
    findAllEnabled: async function(req, res) {
        models.Car.findAll({where: {enabled: true}}).then(carResponse => {
            res.status(200).json(carResponse);
        }).catch( error => {
            res.status(400).send(error);
        });
    },
    findBySlug: async function(req, res) {
        models.Car.findAll({where: {slug: req.body.slug}}).then(carResponse => {
            res.status(200).json(carResponse);
        }).catch( error => {
            res.status(400).send(error);
        });
    },
    findById: async function(req, res) {
        models.Car.findAll({where: {id: req.body.id}}).then(carResponse => {
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