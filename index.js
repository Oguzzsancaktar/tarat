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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const http_1 = require("http");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
// Logger.
const morgan_1 = __importDefault(require("morgan"));
// Parsers.
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
// Security.
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const envPath = process.env.NODE_ENV === "dev" ? ".env.dev" : ".env.prod";
dotenv_1.default.config({ path: envPath });
const URI = process.env.MONGO_URI || "";
const PORT = process.env.PORT || 8000;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Mongo Connection
        yield mongoose_1.default.connect(URI, {});
        console.log('Connected to MongoDB');
    }
    catch (err) {
        console.log('Error connecting to MongoDB:', err.message);
    }
    // App Server
    const app = (0, express_1.default)();
    const httpServer = (0, http_1.createServer)(app);
    // Middlewares
    app.use(express_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.use((0, helmet_1.default)({
        crossOriginEmbedderPolicy: false,
        crossOriginOpenerPolicy: { policy: 'same-origin-allow-popups' },
        originAgentCluster: true,
        referrerPolicy: {
            policy: 'no-referrer-when-downgrade'
        }
    }));
    app.use(helmet_1.default.contentSecurityPolicy({
        useDefaults: true,
        directives: {
            'img-src': ["'self'", 'https: data: blob:'],
            'default-src': ["'self'", 'https://*'],
            'connect-src': ["'self'", 'https://*', 'wss://*', 'data: blob:'],
            'script-src': ["'self'", 'https: data: blob: https://*']
        }
    }));
    app.use((0, cors_1.default)());
    app.use((0, morgan_1.default)('dev'));
    app.use(body_parser_1.default.urlencoded({ extended: false }));
    app.use(body_parser_1.default.json());
    app.use('/api', routes_1.default);
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
    app.use(express_1.default.urlencoded({
        extended: true
    }));
    httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));
});
main().then(() => {
    console.log('SUCCESS STARTING SERVER');
});
