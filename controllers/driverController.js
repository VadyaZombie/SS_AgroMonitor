const driverService = require('../services/driverService'); 

const setDriver = async (req, res) => {
    try {
        await driverService.setDriver(req);
        res.sendStatus(201);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
};

const getFullNameDrivers = async (req, res) => {
    try {
        let resDrivers = await driverService.getFullNameDrivers();
        res.status(200).json(resDrivers);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
};

const getBirthdayDrivers = async (req, res) => {
    try {
        let resDrivers = await driverService.getBirthdayDrivers();
        res.status(200).json(resDrivers);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
};

const getPositionDrivers = async (req, res) => {
    try {
        let resDrivers = await driverService.getPositionDrivers();
        res.status(200).json(resDrivers);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
};

const getFullNameBirthdayDrivers = async (req, res) => {
    try {
        let resDrivers = await driverService.getFullNameBirthdayDrivers();
        res.status(200).json(resDrivers);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
};

const getFullNamePositionDrivers = async (req, res) => {
    try {
        let resDrivers = await driverService.getFullNamePositionDrivers();
        res.status(200).json(resDrivers);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
};

const getBirthdayPositionDrivers = async (req, res) => {
    try {
        let resDrivers = await driverService.getBirthdayPositionDrivers();
        res.status(200).json(resDrivers);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
    }
};

const getDrivers = async (req, res) => {
    try {
        let resDrivers = await driverService.getDrivers();
        res.status(200).json(resDrivers);
    } catch (err) {
        console.log(err.message);
        res.sendStatus(500);
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
