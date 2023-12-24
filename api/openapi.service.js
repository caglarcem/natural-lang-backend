// 1. Initialize a new project with: npm init -y, and create an 4 js files .env file
// 2. npm i "@pinecone-database/pinecone@^0.0.10" dotenv@^16.0.3 langchain@^0.0.73
// 3. Obtain API key from OpenAI (https://platform.openai.com/account/api-keys)
// 4. Obtain API key from Pinecone (https://app.pinecone.io/)
// 5. Enter API keys in .env file
// Optional: if you want to use other file loaders than pdf (epub, docx etc..)
//		(https://js.langchain.com/docs/modules/indexes/document_loaders/examples/file_loaders/)
const { PineconeClient } = require('@pinecone-database/pinecone');
const { DirectoryLoader } = require('langchain/document_loaders/fs/directory');
const { TextLoader } = require('langchain/document_loaders/fs/text');
const { PDFLoader } = require('langchain/document_loaders/fs/pdf');
const dotenv = require('dotenv');
const {
    createPineconeIndex,
} = require('./openapi.services/createPineconeIndex.js');
const { updatePinecone } = require('./openapi.services/updatePinecone.js');
const {
    queryPineconeVectorStoreAndQueryLLM,
} = require('./openapi.services/queryPineconeAndQueryGPT.js');

const getAnswerToQuestion = async (question) => {
    // 6. Load environment variables
    dotenv.config();

    // 7. Set up DirectoryLoader to load documents from the ./documents directory
    const loader = new DirectoryLoader('./documents', {
        '.txt': (path) => new TextLoader(path),
        '.pdf': (path) => new PDFLoader(path),
    });
    const docs = await loader.load();

    // 8. Set up variables for the filename, question, and index settings
    const indexName = 'your-pinecone-index-name';
    const vectorDimension = 1536;

    // 9. Initialize Pinecone client with API key and environment
    const client = new PineconeClient();
    await client.init({
        apiKey: process.env.PINECONE_API_KEY,
        environment: process.env.PINECONE_ENVIRONMENT,
    });

    // 11. Check if Pinecone index exists and create if necessary
    await createPineconeIndex(client, indexName, vectorDimension);

    // 12. Update Pinecone vector store with document embeddings
    await updatePinecone(client, indexName, docs);

    // 13. Query Pinecone vector store and GPT model for an answer
    const answer = await queryPineconeVectorStoreAndQueryLLM(
        client,
        indexName,
        question
    );

    return answer;
};

module.exports = { getAnswerToQuestion };
