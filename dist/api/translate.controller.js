"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguages = exports.getTranslatedSpeech = exports.getTranslateAnswer = void 0;
const { getTranslation, getSupportedLanguages, } = require('./translate.service');
const getLanguages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const languages = yield getSupportedLanguages();
    return res.send(languages);
});
exports.getLanguages = getLanguages;
const getTranslateAnswer = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const translationRequest = {
        incomingSentence: req.query.incomingSentence,
        fromLanguageCode: req.query.fromLanguageCode,
        toLanguageCode: req.query.toLanguageCode,
    };
    const translation = yield getTranslationResult(translationRequest);
    return res.send(translation);
});
exports.getTranslateAnswer = getTranslateAnswer;
const getTranslatedSpeech = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const translationRequest = {
        incomingSentence: req.query.incomingSentence,
        fromLanguageCode: req.query.fromLanguageCode,
        toLanguageCode: req.query.toLanguageCode,
    };
    const translation = yield getTranslationResult(translationRequest);
    // Handle the result as needed
});
exports.getTranslatedSpeech = getTranslatedSpeech;
const getTranslationResult = (translationRequest) => __awaiter(void 0, void 0, void 0, function* () {
    const { incomingSentence, fromLanguageCode, toLanguageCode } = translationRequest;
    return yield getTranslation(incomingSentence, fromLanguageCode, toLanguageCode);
});
