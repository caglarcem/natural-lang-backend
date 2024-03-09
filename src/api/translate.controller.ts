import { Request, Response, NextFunction } from 'express';
import { getTextTranslation, getSupportedLanguages } from './translate.service';

interface TranslationRequest {
    incomingSentence: string;
    fromLanguageCode: string;
    toLanguageCode: string;
}

const getLanguages = async (req: any, res: any, next: any) => {
    const languages = await getSupportedLanguages();
    return res.send(languages);
};

const getTranslatedText = async (req: any, res: any, next: any) => {
    const translationRequest: TranslationRequest = {
        incomingSentence: req.query.incomingSentence,
        fromLanguageCode: req.query.fromLanguageCode,
        toLanguageCode: req.query.toLanguageCode,
    };

    const translation = await translateText(translationRequest);

    return res.send(translation);
};

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

    const textTranslation = await translateText(translationRequest);
    // Handle the result as needed
};

const translateText = async (translationRequest: TranslationRequest) => {
    const { incomingSentence, fromLanguageCode, toLanguageCode } =
        translationRequest;

    return await getTextTranslation(
        incomingSentence,
        fromLanguageCode,
        toLanguageCode
    );
};

export { getTranslatedText, getTranslatedSpeech, getLanguages };
