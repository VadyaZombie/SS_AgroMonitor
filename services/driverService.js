const driverModel = require('../models/driverModel');

const getDrivers = async () => {
  try{
      return await driverModel.getDrivers();
  }
    catch(err){
        throw new Error(err);
    }
};


module.exports = {
    getDrivers
};
