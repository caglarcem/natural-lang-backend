const { getAnswerToQuestion } = require('./openapi.service.js');

const getOpenApiAnswer = async (req, res, next) => {
    const question = req.query.question;

    console.log('Question: ', question);

    // TODO Mock
    // return res.send(
    //     'Gatsby and Daisy had a romantic relationship that began five years ago and has continued until the present. They love each other and have been seeing each other secretly, even though Daisy is now married to Tom Buchanan.'
    // );

    const answer = await getAnswerToQuestion(question);

    res.send(answer);
};

module.exports = { getOpenApiAnswer };
