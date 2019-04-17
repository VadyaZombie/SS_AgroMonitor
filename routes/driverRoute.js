const express = require('express');
const driverController = require('../controllers/driverController');
const bodyHandler = require('../error_handlers/body_handlers');
const filterHandler = require('../error_handlers/filter_handlers');

const router = express.Router();

router.post('/', bodyHandler.checkBody(), driverController.createDriver);
router.get('/', filterHandler.checkFilter(), driverController.getDrivers);
router.get('/', driverController.getDriversByFirstname);
router.get('/:id([a-zA-z0-9]{24})', driverController.getDriverById);
router.patch('/:id([a-zA-z0-9]{24})',bodyHandler.checkBody(), driverController.updatePartialDriver);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(), driverController.updateDriver);
router.delete('/:id([a-zA-z0-9]{24})', driverController.deleteDriver);

module.exports = router;