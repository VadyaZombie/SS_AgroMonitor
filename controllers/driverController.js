const driverService = require('../services/driverService'); 

const createDriver = async (req, res) => {
    const result = await driverService.createDriver(req.body);
    res.status(201).json(result.ops[0]);
};

const getDrivers = async (req, res) => {
    const result = await driverService.getDrivers();
    res.status(200).json(result);
};

const getDriverById = async (req, res) => {
    const result = await driverService.getDriverById(req.params['id']);
    res.status(200).json(result);
};

const getDriversByFirstname = async (req, res) => {
    const result = await driverService.getDriversByFirstname(req.query['firstname']);
    res.status(200).json(result);
};

const updatePartialDriver = async (req, res) => {
    const result = await driverService.updatePartialDriver(req.params['id'], req.body);
    res.status(200).json(result['value']);
};

const updateDriver = async (req, res) => {
    const result = await driverService.updateDriver(req.params['id'], req.body);
    res.status(200).json(result['value']);
};

const deleteDriver = async (req, res) => {
    const result = await driverService.deleteDriver(req.params['id']);
    res.status(200).json(result);
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
