const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const StoreController = require('../controllers/storeController');
const {storeCollection} = require('../config');

const router = express.Router();
const storeController = new StoreController(storeCollection);

router.post('/', bodyHandler.checkBody(storeCollection), storeController.createDocument);
router.get('/', filterHandler.checkFilter(), storeController.getAllDocument);
router.get('/', storeController.getDocumentByFilter);
router.get('/:id([a-zA-z0-9]{24})', storeController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',/*bodyHandler.checkBody(storeCollection),*/ storeController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(storeCollection), storeController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', storeController.deleteDocument);

module.exports = router;