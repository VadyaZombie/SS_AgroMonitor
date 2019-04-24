const AgroService = require('./agroService');

class FieldService extends AgroService {
    constructor(collectioName) {
        super(collectioName);
    }
}

module.exports = FieldService;