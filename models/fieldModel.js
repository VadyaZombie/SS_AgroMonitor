const AgroModel = require('./agroModel');

class FieldModel extends AgroModel {
    constructor(collectionName) {
        super(collectionName);
    }
}

module.exports = FieldModel;