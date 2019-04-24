const AgroController = require('./agroController');
const DriverService = require('../services/driverService');
const FieldService = require('../services/fieldService');
const CarService = require('../services/carService');

const setCarEnum = {
    DRIVER_IN_CAR: 'driverInCar',
    CAR_BUSY: 'carBusy',
    NO_CAR_IN_GARAGE: 'noCarInGarage',
    NO_CAR: 'noCar',
};

const unsetCarEnum = {
    NO_CAR_IN_GARAGE: 'noCarInGarage',
    DRIVER_WORK: 'driverWork',
    NO_CAR: 'noCar'
};

class DriverController extends AgroController {
    constructor(collectionName) {
        super(collectionName);
        this.unsetCar = this.unsetCar.bind(this);
        this.setCar = this.setCar.bind(this);
        this.driverService = new DriverService(collectionName);
        this.fieldService = new FieldService('fields');
        this.carService = new CarService('cars');

        this.assignOnField = this.assignOnField.bind(this);
        this.takeCar = this.takeCar.bind(this);
        //this.onField = this.onField.bind(this);

    }


    async setCar(req, res) {
        const driver = await this.driverService.getDocumentById(req.params['id']);

        if(driver) {
            const result = await this.carService.setCar(req.params['id'], req.body['carId']);
            
            switch(result) {
                case setCarEnum.DRIVER_IN_CAR: {
                    res.status(200).send('One car one driver'); 
                    break;
                }
                case setCarEnum.CAR_BUSY: {
                    res.status(200).send('Car is busy');
                    break;
                }
                case setCarEnum.NO_CAR_IN_GARAGE: {
                    res.status(200).send('No car in garage'); 
                    break;
                }
                case setCarEnum.NO_CAR: {
                    res.status(404).send('Car doesn\'t exist'); 
                    break;
                }
                default: res.status(200).json(result['value']);
            }
        } else {
            res.status(404).send('Driver doesn\'t exist');
        } 
    }

    async unsetCar(req, res) {
        const driver = await this.driverService.getDocumentById(req.params['id']);
        
        if(driver) {
            const result = await this.carService.unsetCar(req.params['id'], req.body['carId']);
            
            switch(result) {
                case setCarEnum.NO_CAR_IN_GARAGE: {
                    res.status(200).send('No car in garage'); 
                    break;
                }
                case unsetCarEnum.DRIVER_WORK: {
                    res.status(200).send('Driver is working'); 
                    break;
                }
                case unsetCarEnum.NO_CAR: {
                    res.status(404).send('Car doesn\'t exist'); 
                    break;
                }
                default: res.status(200).json(result['value']);
            }
        } else {
            res.status(404).send('Driver doesn\'t exist');
        } 
    }
}

    async assignOnField(req, res) {
        const result = await this.driverService.assignOnField(req.params['id'], req.body);
        await console.log(result);
        if (result) {
            res.status(200).json({
                message: 'ok'
            });
        } else {
            res.status(204).json({
                message: "this driver is already working"
            });
        }
    }

    async takeCar(req, res) {
        if(await this.driverService.driverIsExist(req.params['id'])){
            if (await this.carService.carIsExist(req.body['carId'])){
                const result = await this.driverService.takeCarById(req.params['id'], req.body['carId'])
                res.status(200).json({message : result});
            } else { res.status(404).json({message: `Car with id ${req.body['carId']} does not exist`})}
        } else { res.status(404).json({message: `Driver with id ${req.params['id']} does not exist`})}
    }

    // async onField(req, res) {
    //     if(await this.driverService.driverIsExist(req.params['id'])){
    //         if(await this.fieldService.fieldIsExist(req.body['fieldId'])){
    //             const result = await this.driverService.moveToField(req.params['id'] , req.body['fieldId']);
    //         } else { res.status(404).json({message: `Field with id ${req.body['fieldId']} does not exist`})}
    //     } else { res.status(404).json({message: `Driver with id ${req.params['id']} does not exist`})}
    // }}

    // async loadIntoCar(){

    // }

    // async unloadCarInStoreById(){

    // }
};


module.exports = DriverController;