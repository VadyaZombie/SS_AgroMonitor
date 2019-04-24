const AgroService = require('./agroService');
const GarageModel = require('../models/garageModel');

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
    async checkCarInGarage(carId) {
        const garages = await this.garageModel.getAllDocument();

        for (let garage of garages) {
            for (let id of garage['carsId']) {
                if (id === carId) {
                    return true;
                }
            }
        }
    }
    
    async moveToGarage(carId, garageId) {
        const garage = await super.getDocumentById(garageId);

        if (garage) {
            if (!await this.checkCarInGarage(carId)) {
                    if(garage['maxCapacity'] !== garage['carsId'].length) {
                        return await this.garageModel.updateGarage(carId, garageId);
                    } else {
                        return 'fullGarage';
                    }
            } else {
                return 'carInGarage';
            }      
        } else {
            return 'noGarage';
        }
    }
}

module.exports = GarageService;