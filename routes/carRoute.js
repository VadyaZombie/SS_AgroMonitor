const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const CarController = require('../controllers/carController');
const {carCollection} = require('../config');

const router = express.Router();
const carController = new CarController(carCollection);

router.post('/', bodyHandler.checkBody(carCollection), carController.createDocument);
router.get('/', filterHandler.checkFilter(carCollection), carController.getAllDocument);
router.get('/', carController.getDocumentByFilter);
router.get('/:id([a-zA-z0-9]{24})', carController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',/*bodyHandler.checkBody(carCollection),*/ carController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(carCollection), carController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', carController.deleteDocument);

module.exports = router;