const express = require('express');
const router = express.Router();
const {logger} = require('../logger');

router.use((req, res, next) => {
    logger(req.method, req.url, req.headers);
    next();
});

router.get('/', (req, res) => {
        res.sendStatus(200);
});

module.exports = router;
