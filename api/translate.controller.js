const {
    getTranslation,
    getSupportedLanguages,
} = require('./translate.service.js');

const getTranslateAnswer = async (req, res, next) => {
    const incomingSentence = req.query.incomingSentence;
    const fromLanguageCode = req.query.fromLanguageCode;
    const toLanguageCode = req.query.toLanguageCode;

    console.log('IN: ', req.query);

    const translation = await getTranslation(
        incomingSentence,
        fromLanguageCode,
        toLanguageCode
    );

    return res.send(translation);
};

const getLanguages = async (req, res, next) => {
    const languages = await getSupportedLanguages();

    return res.send(languages);
};

module.exports = { getTranslateAnswer, getLanguages };
