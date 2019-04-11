const express = require('express');
const router = express.Router();
const driverController = require('../controllers/driverController');

router.post('/', driverController.setDriver);

router.get('/', driverController.getDrivers);

router.get('/fullname', driverController.getFullNameDrivers);

router.get('/birthday', driverController.getBirthdayDrivers);

router.get('/position', driverController.getPositionDrivers);

router.get('/fullname/birthday', driverController.getFullNameBirthdayDrivers);

router.get('/fullname/position', driverController.getFullNamePositionDrivers);

router.get('/birthday/position', driverController.getBirthdayPositionDrivers);

module.exports = router;
