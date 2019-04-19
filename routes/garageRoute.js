const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const GarageController = require('../controllers/garageController');
const {garagesCollection} = require('../config');

const router = express.Router();
const garageController = new GarageController(garagesCollection);

router.post('/', bodyHandler.checkBody(), garageController.createDocument);
router.get('/', filterHandler.checkFilter(), garageController.getAllDocument);
router.get('/', garageController.getDocumentByFilter);
router.get('/:id([a-zA-z0-9]{24})', garageController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',bodyHandler.checkBody(), garageController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(), garageController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', garageController.deleteDocument);

module.exports = router;