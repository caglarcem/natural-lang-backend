const TextToSpeech = require('@google-cloud/text-to-speech');
import * as dotenv from 'dotenv';

dotenv.config();

// Creates a Google Translate client
const client = new TextToSpeech.TextToSpeechClient();

const convertTextToSpeech = async (
    incomingSentence: string
): Promise<Buffer> => {
    const request = {
        input: { text: incomingSentence },
        voice: {
            languageCode: 'en-US',
            name: 'en-US-Wavenet-D',
            ssmlGender: 'NEUTRAL',
        },
        audioConfig: { audioEncoding: 'LINEAR16' },
    };

    const [response] = await client.synthesizeSpeech(request);

    console.log('SPEECH RESPONSE: ', response);
    console.log('eben');

    const responseBuffer = response.audioContent as Buffer;

    console.log('Response buffer: ', responseBuffer);

    return responseBuffer;
};

export { convertTextToSpeech };
