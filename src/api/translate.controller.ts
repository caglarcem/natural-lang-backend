const {
    getTranslation,
    getSupportedLanguages,
} = require('./translate.service');
import { Request, Response, NextFunction } from 'express';

interface TranslationRequest {
    incomingSentence: string;
    fromLanguageCode: string;
    toLanguageCode: string;
}

const getLanguages = async (req: any, res: any, next: any) => {
    const languages = await getSupportedLanguages();
    return res.send(languages);
};

const getTranslateAnswer = async (req: any, res: any, next: any) => {
    const translationRequest: TranslationRequest = {
        incomingSentence: req.query.incomingSentence,
        fromLanguageCode: req.query.fromLanguageCode,
        toLanguageCode: req.query.toLanguageCode,
    };

    const translation = await getTranslationResult(translationRequest);

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

    const translation = await getTranslationResult(translationRequest);
    // Handle the result as needed
};

const getTranslationResult = async (translationRequest: TranslationRequest) => {
    const { incomingSentence, fromLanguageCode, toLanguageCode } =
        translationRequest;
    return await getTranslation(
        incomingSentence,
        fromLanguageCode,
        toLanguageCode
    );
};

export { getTranslateAnswer, getTranslatedSpeech, getLanguages };
