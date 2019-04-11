const driverModel = require('../models/driverModel');

const setDriver = async (req) => {
  try{
      return await driverModel.setDriver(req.body);
  }
    catch(err){
        throw new Error(err);
    }
};

const getFullNameDrivers = async () => {
  try{
      return await driverModel.getFullNameDrivers();
  }
    catch(err){
        throw new Error(err);
    }
};

const getBirthdayDrivers = async () => {
  try{
      return await driverModel.getBirthdayDrivers();
  }
    catch(err){
        throw new Error(err);
    }
};

const getPositionDrivers = async () => {
  try{
      return await driverModel.getPositionDrivers();
  }
    catch(err){
        throw new Error(err);
    }
};


const getFullNameBirthdayDrivers = async () => {
  try{
      return await driverModel.getFullNameBirthdayDrivers();
  }
    catch(err){
        throw new Error(err);
    }
};

const getFullNamePositionDrivers = async () => {
  try{
      return await driverModel.getFullNamePositionDrivers();
  }
    catch(err){
        throw new Error(err);
    }
};

const getBirthdayPositionDrivers = async () => {
  try{
      return await driverModel.getBirthdayPositionDrivers();
  }
    catch(err){
        throw new Error(err);
    }
};

const getDrivers = async () => {
  try{
      return await driverModel.getDrivers();
  }
    catch(err){
        throw new Error(err);
    }
};


module.exports = {
    setDriver,
    getFullNameDrivers,
    getBirthdayDrivers,
    getPositionDrivers,
    getFullNameBirthdayDrivers,
    getFullNamePositionDrivers,
    getBirthdayPositionDrivers,
    getDrivers
};
