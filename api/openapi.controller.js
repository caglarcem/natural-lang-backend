const { getAnswerToQuestion } = require('./openapi.service.js');

const getOpenApiAnswer = async (req, res, next) => {
    const question = req.query.question;

    console.log('Question: ', question);

    const answer = await getAnswerToQuestion(question);

    res.send(answer);

    console.log('Answer: ', answer);
};

module.exports = { getOpenApiAnswer };
