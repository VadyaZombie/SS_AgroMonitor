const AgroController = require('./agroController'); 
const GarageService = require('../services/garageService'); 
const CarService = require('../services/carService'); 

const moveToGarageEnum = {
    FULL_GARAGE: 'fullGarage',
    CAR_IN_GARAGE: 'carInGarage',
    NO_GARAGE: 'noGarage'
};

class CarController extends AgroController {
    constructor(collectionName) {
        super(collectionName);

        this.carService = new CarService('cars');
        this.garageService = new GarageService('garages');

        this.moveToGarage = this.moveToGarage.bind(this);
    }

    async moveToGarage(req, res) {
        const car = await this.carService.getDocumentById(req.params['id']);
        if(car) {
            const result = await this.garageService.moveToGarage(req.params['id'], req.body['garageId']);
            
            switch(result) {
                case moveToGarageEnum.FULL_GARAGE: {
                    res.status(200).send('Garage is full'); 
                    break;
                }
                case moveToGarageEnum.CAR_IN_GARAGE: {
                    res.status(200).send('Car in garage'); 
                    break;
                }
                case moveToGarageEnum.NO_GARAGE: {
                    res.status(404).send('Garage doesn\'t exist'); 
                    break;
                }
                default: res.status(200).json(result['value']);
            }
        } else {
            res.status(404).send('Car doesn\'t exist');
        }
    }
    
}

module.exports = CarController;
