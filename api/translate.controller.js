const {
    getTranslation,
    getSupportedLanguages,
} = require('./translate.service.js');

const getTranslateAnswer = async (req, res, next) => {
    const incomingSentence = req.query.incomingSentence;
    const languageCode = req.query.languageCode;

    const translation = await getTranslation(incomingSentence, languageCode);

    return res.send(translation);
};

const getLanguages = async (req, res, next) => {
    const languages = await getSupportedLanguages();

    return res.send(languages);
};

module.exports = { getTranslateAnswer, getLanguages };
