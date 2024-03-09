import { Request, Response, NextFunction } from 'express';
import { translateText } from './services/translateText.service';
import { getSupportedLanguages } from './services/supportedLanguages.service';

interface TranslationRequest {
    incomingSentence: string;
    fromLanguageCode: string;
    toLanguageCode: string;
}

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

    const translation = await getTranslationResult(translationRequest);

    return res.send(translation);
};

/** Text to speech **/
const getTranslatedSpeech = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const translationRequest: TranslationRequest = {
        incomingSentence: req.query.incomingSentence as string,
        fromLanguageCode: req.query.fromLanguageCode as string,
        toLanguageCode: req.query.toLanguageCode as string,
    };

    const translatedText = await getTranslationResult(translationRequest);

    // TODO Translate text to speech using textToSpeech.service
};

const getTranslationResult = async (translationRequest: TranslationRequest) => {
    const { incomingSentence, fromLanguageCode, toLanguageCode } =
        translationRequest;

    return await translateText(
        incomingSentence,
        fromLanguageCode,
        toLanguageCode
    );
};

export { getTranslatedText, getTranslatedSpeech, getLanguages };
