const AgroController = require('./agroController'); 

class GarageController extends AgroController {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = GarageController;
