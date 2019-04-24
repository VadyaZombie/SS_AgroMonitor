const AgroService = require('./agroService');
const GarageModel = require('../models/garageModel');
const FieldModel = require('../models/fieldModel');

class CarService extends AgroService {
    constructor(collectionName) {
        super(collectionName);

        this.garageModel = new GarageModel('garages');
        this.fieldModel = new FieldModel('fields');
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

    async checkDriverWork(driverId) {
        const fields = await this.fieldModel.getAllDocument();

        for (let field of fields) {
            for (let id of field['driversId']) {
                if (id === driverId) {
                    return true;
                }
            }
        }
    }

    async setCar(driverId, carId) {
        const car = await super.getDocumentById(carId);
        if (car) {
            const cars = await super.getAllDocument();
            if (await this.checkCarInGarage(carId)) {
                for (let driverInCar of cars) {
                    if (driverInCar['driverId'] === driverId) {
                        return 'driverInCar';
                    }
                }
                if (car['driverId']) {
                    return 'carBusy';
                }
                return await super.updateDocument(carId, {driverId});
            } else {
                return 'noCarInGarage';
            }
        } else {
            return 'noCar';
        }
    }

    async unsetCar(driverId, carId) {
        const car = await super.getDocumentById(carId);
        
        if (car) {
            const cars = await super.getAllDocument();
            if (!await this.checkDriverWork(driverId)) {
                if (await this.checkCarInGarage(carId)) {
                for (let driverInCar of cars) {
                    if (driverInCar['driverId'] === driverId) {
                        return await super.updateDocument(carId, {driverId: ''});
                    }
                }
            } else {
                return 'noCarInGarage';
            }
            } else {
                return 'driverWork';
            }
        } else {
            return 'noCar';
        }
    }
}

module.exports = CarService;