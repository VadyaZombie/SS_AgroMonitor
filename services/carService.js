const AgroService = require('./agroService');
const FieldService = require('./fieldService');
const GarageModel = require('../models/garageModel');
const FieldModel = require('../models/fieldModel');

const CarModel = require('../models/carModel');


class CarService extends AgroService {
    constructor(collectionName) {
        super(collectionName);

        this.fieldService = new FieldService('fields');

        this.garageModel = new GarageModel('garages');
        this.fieldModel = new FieldModel('fields');
        this.carModel = new CarModel(collectionName);
    }

    async checkDriver(driverId) {
        return await this.carModel.checkDriver(driverId);
    }

    async carIsExist(carId){
        if(carId.length != 24) {return false}
        let result = await this.agroModel.getDocumentById(carId);
        if (await result) {
            return true;
        } else {
            return false;
        }
    }

    async takeCar(driverId) {
        let freeCar = await this.carModel.findFreeCar();
        let result = await this.agroModel.updateDocument(freeCar['_id'], {driverId: driverId});
        //await removeCarFromGarage()
        return await result.value;
    }

    async loadIntoCar(carId, amount){
        let result = await this.agroModel.updateDocument(carId, {curCap : amount});
        return await result.value;
    }

    async getWheat (currCar, fieldId) {
        let harvestedWheat = await this.fieldService.subtractProduct(fieldId, currCar.maxCap);
        let result = await this.loadIntoCar(currCar['_id'] , harvestedWheat); 
        return result;
    }

    async getCarByDriverId (driverId){
        let curCar = await this.carModel.getCarByDriverId(driverId);
        await console.log(curCar);
        return await curCar;
    }

    async unload (currCar){
        return await this.carModel.unloadCar(currCar['_id']);
    }

    async removeDriver(currCar){
        return await this.carModel.removeDriver(currCar['_id']);
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
        await console.log(fields)
        for (let field of fields) {
            for (let id of field['drivers']) {
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