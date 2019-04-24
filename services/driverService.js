const AgroService = require('./agroService');
const CarService = require('./carService');
const StoreService = require('./storeService');
const FieldSevice = require('./fieldService');
const GarageService = require('./garageService');

const DriverModel = require('../models/driverModel');
const FieldModel = require('../models/fieldModel'); //переписать

class DriverService extends AgroService {
    constructor(collectionName) {
        super(collectionName);

        this.carService = new CarService('cars');
        this.storeService = new StoreService('stores');
        this.fieldService = new FieldSevice('fields');
        this.garageService = new GarageService('garages');

        this.driverModel = new DriverModel(collectionName);
        this.fieldModel = new FieldModel('fields');
    }

    async driverIsFree(driverId){
        let result = await this.carService.checkDriver(driverId);
        if (result === null) {
            return await true;
        } else {
            return await false;
        }
    }

    async driverIsExist(driverId){
        if(driverId.length !== 24) {return false}
        let result = await this.agroModel.getDocumentById(driverId);
        if (result) {
            return true;
        } else {
            return false;
        }
    }

    async takeCar(driverId){
        let result = await this.carService.takeCar(driverId);
        return await result;
    }

    async addDriverToTheField(driverId, content){
        return await this.fieldModel.addElementInDocumentArray(content['field_id'], driverId); //исправить
    }

    async unloadCar(currCar, storeId){
        await this.storeService.addToStore(storeId, currCar.curCap);
        return await this.carService.unload(currCar);
    }

    async putCarInGarage(currCar, fieldId, driverId){
        let freeGarageId = await this.garageService.getFreeGarage();
        await this.fieldService.removeDriverFromField(fieldId, driverId);
        return await this.garageService.addCarToGarage(freeGarageId, currCar["_id"]);    
    }

    async removeDriver(currCar){
        return await this.carService.removeDriver(currCar);
    }

    async assignOnField(driverId, content){
        if (await this.driverIsFree(driverId)){
            let currCar = await this.takeCar(driverId);
            await this.addDriverToTheField(driverId, content);
            currCar = await this.carService.getWheat(currCar , content['field_id']);
            let storeId = await this.storeService.getFreeStore(currCar.curCap);
            await this.unloadCar(currCar, storeId);
            await this.putCarInGarage(currCar, content['field_id'], driverId);
            await this.removeDriver(currCar);
            return true;
        } else {
            await console.log('err');
            return false;
        }
    }

    async takeCarById(driverId, carId){
        if(this.driverIsFree(driverId)){
            let curCar = await this.carService.getDocumentById(carId);
            if (!curCar.driverId) {
                curCar = await this.carService.updateDocument(carId, {driverId:driverId});
                return await curCar.value;
            } else { return await{ err : 'car is not available now'}};
        } else { return await{ err : 'this driver is already working'}};
    }

    // async 
}

module.exports = DriverService;