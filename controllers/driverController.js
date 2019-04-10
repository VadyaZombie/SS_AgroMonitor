const driverService = require('../services/driverService'); 

const getDrivers = async (req, res, next) => {
    try {
        let resDrivers = await driverService.getDrivers();
        res.status(200).json(resDrivers);
        next();
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
};

module.exports = {
    getDrivers
};
