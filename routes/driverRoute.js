const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const DriverController = require('../controllers/driverController');
const {driversCollection} = require('../config');

const router = express.Router();
const driverController = new DriverController(driversCollection);

router.post('/', bodyHandler.checkBody(), driverController.createDocument);
router.get('/', filterHandler.checkFilter(), driverController.getAllDocument);
router.get('/', driverController.getDocumentByFilter);
router.get('/:id([a-zA-z0-9]{24})', driverController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',bodyHandler.checkBody(), driverController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(), driverController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', driverController.deleteDocument);

module.exports = router;