// wsController.ts
import { Server as HttpServer } from 'http';
import WebSocket from 'ws';
import { convertTextToSpeech } from './textToSpeech.service';
import fs from 'fs/promises';

export function createWebSocketServer(server: HttpServer): void {
    const wss = new WebSocket.Server({ server });

    wss.on('connection', (ws) => {
        ws.on('message', async (text: string) => {
            // Perform text-to-speech conversion
            const audioBuffer = await convertTextToSpeech(text);

            if (audioBuffer) {
                // Send the audio stream to the client
                ws.send(audioBuffer);

                await fs.writeFile('./audio.mp3', audioBuffer);
            }
        });
    });
}
