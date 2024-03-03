const express = require('express');
const router = express.Router();
const {
    getTranslatedSpeech,
    getTranslateAnswer,
    getLanguages,
} = require('./translate.controller.js');

router.get('/languages', getLanguages);

router.get('/answer', getTranslateAnswer);

router.get('/translatedSpeech', getTranslatedSpeech);

module.exports = router;
