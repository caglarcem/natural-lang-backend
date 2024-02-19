const { Translate } = require('@google-cloud/translate').v2;
const dotenv = require('dotenv');

dotenv.config();

const translateProjectId = process.env.TRANSLATE_PROJECT_ID;
const translateApiKey = process.env.TRANSLATE_API_KEY;

// Creates a google translate client
const translate = new Translate({
    projectId: translateProjectId,
    key: translateApiKey,
});

const translateSentence = async (
    incomingSentence,
    fromLanguageCode,
    toLanguageCode
) => {
    let translation;

    // TODO real
    // try {
    //     [translation] = await translate.translate(incomingSentence, {
    //         from: fromLanguageCode,
    //         to: toLanguageCode,
    //     });

    //     console.log('translation: ', translation);
    // } catch (err) {
    //     console.log('ERR: ', err);
    // }

    // TODO mock
    translation = 'some translation';

    return translation;
};

module.exports = { translateSentence };
