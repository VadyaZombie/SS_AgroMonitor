const AgroService = require('./agroService');

const GarageModel = require('../models/garageModel');

class GarageService extends AgroService {
    constructor(collectionName) {
        super(collectionName);

        this.garageModel = new GarageModel(collectionName);
    }

    async getFreeGarage(){
        let garage = await this.garageModel.getFreeGarage();
        return await garage['_id'];
    }

    async addCarToGarage(carId, garageId){
        return await this.garageModel.addCarToGarage(garageId, carId)
    }
}

module.exports = GarageService;