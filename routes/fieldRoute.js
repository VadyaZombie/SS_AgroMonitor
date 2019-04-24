const express = require('express');
const {bodyHandler} = require('../error_handlers/error_handlers');
const FieldController = require('../controllers/fieldController');
const {fieldsCollection} = require('../config');

const router = express.Router();
const fieldController = new FieldController(fieldsCollection);

router.post('/', bodyHandler.checkBody(), fieldController.createDocument);
router.get('/', fieldController.getAllDocument);
router.get('/:id([a-zA-z0-9]{24})', fieldController.getDocumentById);
router.patch('/:id([a-zA-z0-9]{24})',bodyHandler.checkBody(), fieldController.updateDocument);
router.put('/:id([a-zA-z0-9]{24})', bodyHandler.checkBody(), fieldController.updateDocument);
router.delete('/:id([a-zA-z0-9]{24})', fieldController.deleteDocument);

module.exports = router;