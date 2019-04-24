const AgroController = require('./agroController');
const DriverService = require('../services/driverService');
const FieldService = require('../services/fieldService');
const CarService = require('../services/carService');

class DriverController extends AgroController {
    constructor(collectionName) {
        super(collectionName);

        this.driverService = new DriverService(collectionName);
        this.fieldService = new FieldService('fields');
        this.carService = new CarService('cars');

        this.assignOnField = this.assignOnField.bind(this);
        this.takeCar = this.takeCar.bind(this);
        //this.onField = this.onField.bind(this);
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
            await console.log(req.body);
            if (await this.carService.carIsExist(req.body['carId'])){
                const result = await this.driverService.takeCarById(req.params['id'], req.body['carId'])
                res.status(200).json({message : result});
            } else { res.status(404).json({message: `Car with id ${req.body['carId']} does not exist`})}
        } else { res.status(404).json({message: `Driver with id ${req.params['id']} does not exist`})}
    }

    // async onField(req, res) {

    // }}

    // async loadIntoCar(){

    // }

    // async unloadCarInStoreById(){

    // }
};


module.exports = DriverController;