import dotenv from 'dotenv';
import { translateText } from './translate.services/translateText';
import { supportedLanguages } from './translate.services/supportedLanguages';

dotenv.config();

const getTextTranslation = async (
    incomingSentence: string,
    fromLanguageCode: string,
    toLanguageCode: string
) => {
    return translateText(incomingSentence, fromLanguageCode, toLanguageCode);
};

const getSupportedLanguages = async () => {
    return supportedLanguages();
};

export { getTextTranslation, getSupportedLanguages };
