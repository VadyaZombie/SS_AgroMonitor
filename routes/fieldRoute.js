const express = require('express');
const {bodyHandler, filterHandler} = require('../error_handlers/error_handlers');
const FieldController = require('../controllers/fieldController');
const {fieldsCollection} = require('../config');

const router = express.Router();
const fieldController = new FieldController(fieldsCollection);

router.post('/', bodyHandler.checkBody(fieldsCollection), fieldController.createDocument);
router.get('/', filterHandler.checkFilter(), fieldController.getAllDocument);
router.get('/', fieldController.getDocumentByFilter);
router.get('/:id([a-zA-z0-9]{24})', fieldController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',/*bodyHandler.checkBody(fieldCollection),*/ fieldController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(fieldsCollection), fieldController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', fieldController.deleteDocument);

module.exports = router;