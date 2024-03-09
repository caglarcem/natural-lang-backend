const dotenv = require('dotenv');
const { translateSentence } = require('./translate.services/translateSentence');
const {
    supportedLanguages,
} = require('./translate.services/supportedLanguages');

dotenv.config();

const getTranslation = async (
    incomingSentence: string,
    fromLanguageCode: string,
    toLanguageCode: string
) => {
    return translateSentence(
        incomingSentence,
        fromLanguageCode,
        toLanguageCode
    );
};

const getSupportedLanguages = async () => {
    return supportedLanguages();
};

module.exports = { getTranslation, getSupportedLanguages };
