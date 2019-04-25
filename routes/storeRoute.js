const express = require('express');
const {bodyHandler} = require('../error_handlers/error_handlers');
const StoreController = require('../controllers/storeController');
const {storesCollection} = require('../config');

const router = express.Router();
const storeController = new StoreController(storesCollection);

router.post('/', bodyHandler.bodyIsJSON())

router.post('/', bodyHandler.checkBody(), storeController.createDocument);
router.get('/', storeController.getAllDocument);
router.get('/:id([a-zA-z0-9]{24})', storeController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',bodyHandler.checkBody(), storeController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(), storeController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(), storeController.deleteDocument);
router.post('/:id([a-zA-z0-9]{24})/move-to-store', bodyHandler.checkStoreId(), storeController.moveToStore);


module.exports = router;