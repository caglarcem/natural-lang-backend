const { Translate } = require('@google-cloud/translate').v2;
import * as dotenv from 'dotenv';

dotenv.config();

const translateProjectId: string | undefined = process.env.TRANSLATE_PROJECT_ID;
const translateApiKey: string | undefined = process.env.TRANSLATE_API_KEY;

// Creates a Google Translate client
const translate = new Translate({
    projectId: translateProjectId,
    key: translateApiKey,
});

const translateText = async (
    incomingSentence: string,
    fromLanguageCode: string,
    toLanguageCode: string
): Promise<string> => {
    let translation: string = '';

    // TODO real
    // try {
    //     [translation] = await translate.translate(incomingSentence, {
    //         from: fromLanguageCode,
    //         to: toLanguageCode,
    //     });

    //     console.log('translation: ', translation);

    //     // return translation;
    // } catch (err) {
    //     console.log('ERR: ', err);
    // }

    // TODO mock
    translation = 'some translation';
    return translation;
};

export { translateText };
