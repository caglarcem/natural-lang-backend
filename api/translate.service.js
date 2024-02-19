const dotenv = require('dotenv');
const {
    translateSentence,
} = require('./translate.services/translateSentence.js');
const {
    supportedLanguages,
} = require('./translate.services/supportedLanguages.js');

dotenv.config();

const getTranslation = async (incomingSentence, languageCode) => {
    return translateSentence(incomingSentence, languageCode);
};

const getSupportedLanguages = async () => {
    return supportedLanguages();
};

module.exports = { getTranslation, getSupportedLanguages };
