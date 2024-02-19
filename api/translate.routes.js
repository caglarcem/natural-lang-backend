const express = require('express');
const router = express.Router();
const {
    getTranslateAnswer,
    getLanguages,
} = require('./translate.controller.js');

router.get('/answer', getTranslateAnswer);

router.get('/languages', getLanguages);

module.exports = router;
