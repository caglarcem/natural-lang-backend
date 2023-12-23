const express = require('express');
const router = express.Router();
const { getOpenApiAnswer } = require('./openapi.controller');

router.get('/', getOpenApiAnswer);

module.exports = router;
