const AgroController = require('./agroController'); 

class DriverController extends AgroController {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = DriverController;
