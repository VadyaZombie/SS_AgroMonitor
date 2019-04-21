const AgroController = require('./agroController'); 

class FieldController extends AgroController {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = FieldController;
