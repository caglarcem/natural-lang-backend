import express from 'express';
import {
    getTranslatedSpeech,
    getTranslatedText,
    getLanguages,
} from './translate.controller';

const router = express.Router();

router.get('/languages', getLanguages);

router.get('/translateToText', getTranslatedText);

router.get('/translateToSpeech', getTranslatedSpeech);

export default router;
