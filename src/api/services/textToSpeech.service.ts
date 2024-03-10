const TextToSpeech = require('@google-cloud/text-to-speech');
import * as dotenv from 'dotenv';

dotenv.config();

const translateProjectId: string | undefined = process.env.TRANSLATE_PROJECT_ID;
const translateApiKey: string | undefined = process.env.TRANSLATE_API_KEY;

// Creates a Google Translate client
const client = new TextToSpeech.TextToSpeechClient({
    projectId: translateProjectId,
    key: translateApiKey,
});

const convertTextToSpeech = async (
    incomingSentence: string
): Promise<Buffer> => {
    const request = {
        input: { incomingSentence },
        voice: {
            languageCode: 'en-US',
            name: 'en-US-Wavenet-D',
            ssmlGender: 'NEUTRAL',
        },
        audioConfig: { audioEncoding: 'LINEAR16' },
    };

    const [response] = await client.synthesizeSpeech(request);
    return response.audioContent as Buffer;
};

export { convertTextToSpeech };
