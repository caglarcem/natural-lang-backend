const express = require('express');
const router = express.Router();
const { getOpenApiAnswer } = require('./openapi.controller.js');

router.get('/', getOpenApiAnswer);

module.exports = router;
