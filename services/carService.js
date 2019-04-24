const AgroService = require('./agroService');
const FieldService = require('./fieldService');

const CarModel = require('../models/carModel');


class CarService extends AgroService {
    constructor(collectionName) {
        super(collectionName);

        this.fieldService = new FieldService('fields');

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

    async unload (currCar){
        return await this.carModel.unloadCar(currCar['_id']);
    }

    async removeDriver(currCar){
        return await this.carModel.removeDriver(currCar['_id']);
    }
}

module.exports = CarService;