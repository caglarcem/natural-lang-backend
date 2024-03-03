// TODO might wanna add typescript support to the project
class TranslationRequest {
    constructor(incomingSentence, fromLanguageCode, toLanguageCode) {
        this.incomingSentence = incomingSentence;
        this.fromLanguageCode = fromLanguageCode;
        this.toLanguageCode = toLanguageCode;
    }
}

exports.TranslationRequest = TranslationRequest;
