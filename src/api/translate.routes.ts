import express from 'express';
import {
    getTranslatedSpeech,
    getTranslatedText,
    getLanguages,
} from './translate.controller';

const router = express.Router();

router.get('/languages', getLanguages);

router.get('/translateText', getTranslatedText);

router.get('/translateSpeech', getTranslatedSpeech);

export default router;
