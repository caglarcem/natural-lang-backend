import { Request, Response, NextFunction } from 'express';
import { translateText } from './services/translateText.service';
import { convertTextToSpeech } from './services/textToSpeech.service';
import { getSupportedLanguages } from './services/supportedLanguages.service';
import TranslationRequest from './models/translationRequest';

const getLanguages = async (req: any, res: any, next: any) => {
    const languages = await getSupportedLanguages();
    return res.send(languages);
};

/** Translate text to text **/
const getTranslatedText = async (req: any, res: any, next: any) => {
    const translationRequest: TranslationRequest = {
        incomingSentence: req.query.incomingSentence,
        fromLanguageCode: req.query.fromLanguageCode,
        toLanguageCode: req.query.toLanguageCode,
    };

    const translation = await translateText(translationRequest);

    return res.send(translation);
};

/** Text to speech **/
const getTranslatedSpeech = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Buffer> => {
    const translationRequest: TranslationRequest = {
        incomingSentence: req.query.incomingSentence as string,
        fromLanguageCode: req.query.fromLanguageCode as string,
        toLanguageCode: req.query.toLanguageCode as string,
    };

    console.log('Translation request: ', translationRequest);

    const translatedText = await translateText(translationRequest);

    console.log('Translated text: ', translatedText);

    // Convert translate text to speech using textToSpeech.service
    const audioBuffer: Buffer = await convertTextToSpeech(translatedText);

    return audioBuffer;
};

export { getTranslatedText, getTranslatedSpeech, getLanguages };
