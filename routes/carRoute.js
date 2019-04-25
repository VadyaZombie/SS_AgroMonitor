const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const CarController = require('../controllers/carController');
const {carsCollection} = require('../config');

const router = express.Router();
const carController = new CarController(carsCollection);

// router.post('/', bodyHandler.checkBody(), carController.createDocument);
// router.get('/', carController.getAllDocument);
router.post('/', bodyHandler.bodyIsJSON())

router.post('/', bodyHandler.checkBody(carsCollection), carController.createDocument);
router.get('/', filterHandler.checkFilter(carsCollection), carController.getAllDocument);
router.get('/', carController.getDocumentByFilter);

router.get('/:id([a-zA-z0-9]{24})', carController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})', carController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(carsCollection), carController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', carController.deleteDocument);
router.post('/:id([a-zA-z0-9]{24})/move-to-garage', bodyHandler.checkGarageId(), carController.moveToGarage);

module.exports = router;