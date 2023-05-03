"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
// import passport from 'passport';
// import cookieParser from 'cookie-parser';
// import bodyParser from 'body-parser';
// import morgan from 'morgan';
require("./config/MongoDb/Db");
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
exports.server = server;
//-------------------cors config--------------------//
// server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
// server.use(bodyParser.json({ limit: '50mb' }));
// server.use(cookieParser());
// server.use(morgan('dev'));
// server.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');  
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });
//--------------------------------------------------//
server.use('/api', index_1.default);
server.use((0, cors_1.default)());
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
server.use((err, _req, res, _next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send({ message });
});
