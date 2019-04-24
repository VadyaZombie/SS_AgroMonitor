const AgroModel = require('./agroModel');

class CarModel extends AgroModel {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = CarModel;