// wsController.ts
import { Server as HttpServer } from 'http';
import WebSocket from 'ws';
import fs from 'fs/promises';
import { convertTextToSpeech } from './textToSpeech.service';
import { translateText } from './translateText.service';
import TranslationRequest from '../models/translationRequest';

export function createWebSocketServer(server: HttpServer): void {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        console.log('WS connection established');

        ws.on('message', async (message: string) => {
            console.log('WS on message: ', message);

            const translateRequest: TranslationRequest = JSON.parse(message);

            console.log('Translate request: ', translateRequest);

            if (translateRequest.inputMode === 'text') {
                // Translate incoming text and send speech back to the client

                const translatedText = await translateText(translateRequest);

                // Perform text-to-speech conversion
                const audioBuffer = await convertTextToSpeech(translatedText);

                console.log('Got the audio buffer');

                if (audioBuffer) {
                    console.log('audio buffer: ', audioBuffer);

                    // Send the audio stream to the client
                    ws.send(audioBuffer);

                    await fs.writeFile('./audio.mp3', audioBuffer);

                    console.log('audio buffer saved to file');
                } else {
                    console.log('No audio buffer');
                }
            } else {
                // Translate incoming speech and send speech back to the client
            }
        });
    });
}
