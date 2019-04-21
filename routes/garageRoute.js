const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const GarageController = require('../controllers/garageController');
const {garageCollection} = require('../config');

const router = express.Router();
const garageController = new GarageController(garageCollection);

router.post('/', bodyHandler.checkBody(garageCollection), garageController.createDocument);
router.get('/', filterHandler.checkFilter(), garageController.getAllDocument);
router.get('/', garageController.getDocumentByFilter);
router.get('/:id([a-zA-z0-9]{24})', garageController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',/*bodyHandler.checkBody(garageCollection),*/ garageController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(garageCollection), garageController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', garageController.deleteDocument);

module.exports = router;