"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const { Request, Response, NextFunction } = require('express');
const indexRouter = require('./routes/index');
const path = require('path');
const createError = require('http-errors');
const cors = require('cors');
const translateRouter = require('./api/translate.routes');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors(corsOptions));
app.use('/', indexRouter);
app.use('/translation', translateRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});
// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
exports.default = app;
