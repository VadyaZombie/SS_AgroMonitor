const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const StoreController = require('../controllers/storeController');
const {storesCollection} = require('../config');

const router = express.Router();
const storeController = new StoreController(storesCollection);

router.post('/', bodyHandler.checkBody(), storeController.createDocument);
router.get('/', filterHandler.checkFilter(), storeController.getAllDocument);
router.get('/', storeController.getDocumentByFilter);
router.get('/:id([a-zA-z0-9]{24})', storeController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',bodyHandler.checkBody(), storeController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(), storeController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', storeController.deleteDocument);

module.exports = router;