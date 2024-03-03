const {
    getTranslation,
    getSupportedLanguages,
} = require('./translate.service.js');
const TranslationRequest = require('./models/translationRequest.js');

const getLanguages = async (req, res, next) => {
    const languages = await getSupportedLanguages();

    return res.send(languages);
};

const getTranslateAnswer = async (req, res, next) => {
    const translationRequest = TranslationRequest(
        req.query.incomingSentence,
        req.query.fromLanguageCode,
        req.query.toLanguageCode
    );

    const translation = getTranslationResult(translationRequest);

    return res.send(translation);
};

const getTranslatedSpeech = async (req, res, next) => {
    const translationRequest = TranslationRequest(
        req.query.incomingSentence,
        req.query.fromLanguageCode,
        req.query.toLanguageCode
    );

    const translation = getTranslationResult(translationRequest);
};

const getTranslationResult = async (translationRequest) => {
    return await getTranslation(
        incomingSentence,
        fromLanguageCode,
        toLanguageCode
    );
};

module.exports = { getTranslateAnswer, getTranslatedSpeech, getLanguages };
