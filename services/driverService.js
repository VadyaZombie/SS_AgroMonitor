const driverModel = require('../models/driverModel');

const createDriver = async (content) => {
    return await driverModel.createDriver(content);
};

const getDrivers = async () => {
    return await driverModel.getDrivers();
};

const getDriverById = async (id) => {
    return await driverModel.getDriverById(id);
};

const getDriversByFirstname = async (firstname) => {
    return await driverModel.getDriversByFirstname(firstname);
};

const updatePartialDriver = async (id, content) => {
    return await driverModel.updatePartialDriver(id, content);
};

const updateDriver = async (id, content) => {
    return await driverModel.updateDriver(id, content);
};

const deleteDriver = async (id) => {
    return await driverModel.deleteDriver(id);
};

module.exports = {
    createDriver,
    getDrivers,
    getDriverById,
    getDriversByFirstname,
    updatePartialDriver,
    updateDriver,
    deleteDriver
};