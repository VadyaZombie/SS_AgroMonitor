const AgroModel = require('./agroModel');

class StoreModel extends AgroModel {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = StoreModel;