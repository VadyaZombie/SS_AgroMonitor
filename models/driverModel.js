const AgroModel = require('./agroModel');

class DriverModel extends AgroModel {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = DriverModel;