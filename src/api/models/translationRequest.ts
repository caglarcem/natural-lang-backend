interface TranslationRequest {
    inputMode: 'speech' | 'text';
    incomingSpeech: string;
    incomingSentence: string;
    fromLanguageCode: string;
    toLanguageCode: string;
}

export default TranslationRequest;
