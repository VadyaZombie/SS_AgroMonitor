const AgroController = require('./agroController'); 

class CarController extends AgroController {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = CarController;
