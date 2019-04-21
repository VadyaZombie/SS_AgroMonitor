const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const FieldController = require('../controllers/fieldController');
const {fieldCollection} = require('../config');

const router = express.Router();
const fieldController = new FieldController(fieldCollection);

router.post('/', bodyHandler.checkBody(fieldCollection), fieldController.createDocument);
router.get('/', filterHandler.checkFilter(), fieldController.getAllDocument);
router.get('/', fieldController.getDocumentByFilter);
router.get('/:id([a-zA-z0-9]{24})', fieldController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',/*bodyHandler.checkBody(fieldCollection),*/ fieldController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(fieldCollection), fieldController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', fieldController.deleteDocument);

module.exports = router;