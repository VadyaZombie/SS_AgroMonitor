const AgroController = require('./agroController'); 
const CarService = require('../services/carService'); 
const DriverService = require('../services/driverService'); 

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

        this.carService = new CarService('cars');
        this.driverService = new DriverService('drivers');

        this.setCar = this.setCar.bind(this);
        this.unsetCar = this.unsetCar.bind(this);
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

module.exports = DriverController;
