const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const DriverController = require('../controllers/driverController');
const {driversCollection} = require('../config');

const router = express.Router();
const driverController = new DriverController(driversCollection);

router.post('/', bodyHandler.checkBody(driversCollection), driverController.createDocument);
router.get('/', filterHandler.checkFilter(), driverController.getAllDocument);
router.get('/', driverController.getDocumentByFilter);
router.get('/:id([a-zA-z0-9]{24})', driverController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})', /*bodyHandler.checkBody(driversCollection),*/ driverController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(driversCollection), driverController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', driverController.deleteDocument);
router.post('/:id([a-zA-z0-9]{24})/slaveWork', driverController.assignOnField); //I have some questions!
router.post('/:id([a-zA-z0-9]{24})/take-car', driverController.takeCar);

module.exports = router;