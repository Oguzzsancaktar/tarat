"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jwt = require('jsonwebtoken');
const path = require('path');
const dotenv = require('dotenv');
const { createServer } = require('http');
const express = require('express');
const mongoose = require('mongoose');
// Logger.
const morgan = require('morgan');
// Parsers.
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// Security.
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');
dotenv.config();
const URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Mongo Connection
        yield mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log('Error connecting to MongoDB:', err.message);
    }
    // App Server
    const app = express();
    const httpServer = createServer(app);
    // Middlewares
    app.use(express.json());
    app.use(cookieParser());
    app.use(helmet({
        crossOriginEmbedderPolicy: false,
        crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' },
        originAgentCluster: true,
        referrerPolicy: {
            policy: 'no-referrer-when-downgrade'
        }
    }));
    app.use(helmet.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            'img-src': ["'self'", 'https: data: blob:'],
            'default-src': ["'self'", 'https://*'],
            'connect-src': ["'self'", 'https://*', 'wss://*', 'data: blob:'],
            'script-src': ["'self'", 'https: data: blob: https://*']
        }
    }));
    app.use(cors());
    app.use(morgan('dev'));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    // app.use('/api', routes)
    // error handler
    app.use(function (err, req, res, next) {
        console.log(err);
        res.sendStatus(err.status || 500);
    });
    process.on('unhandledRejection', error => {
        console.log('unhandledRejection', error);
    });
    process.on('uncaughtException', error => {
        console.log('uncaughtException', error);
    });
    app.use(express.urlencoded({
        extended: true
    }));
    httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
main().then(() => {
    console.log('SUCCESS STARTING SERVER');
});
