const AgroService = require('./agroService');
const GarageModel = require('../models/garageModel');

class GarageService extends AgroService {
    constructor(collectioName) {
        super(collectioName);

        this.garageModel = new GarageModel('garages');
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