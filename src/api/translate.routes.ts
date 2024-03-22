import express from 'express';
import { getTranslatedText, getLanguages } from './translate.controller';

const router = express.Router();

router.get('/languages', getLanguages);

router.get('/translateToText', getTranslatedText);

export default router;
