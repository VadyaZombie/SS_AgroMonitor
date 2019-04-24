const AgroService = require('./agroService');

class DriverService extends AgroService {
    constructor(collectioName) {
        super(collectioName);
    }
}

module.exports = DriverService;