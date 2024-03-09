"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});
exports.default = router;
