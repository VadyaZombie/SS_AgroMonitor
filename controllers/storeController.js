const AgroController = require('./agroController'); 

class StoreController extends AgroController {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = StoreController;
