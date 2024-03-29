"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
// import passport from 'passport';
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
require("./config/MongoDb/Db");
const cors_1 = __importDefault(require("cors"));
const server = (0, express_1.default)();
exports.server = server;
//-------------------cors config--------------------//
server.use(body_parser_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.use(body_parser_1.default.json({ limit: '50mb' }));
server.use((0, cookie_parser_1.default)());
server.use((0, morgan_1.default)('dev'));
server.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://sazones-culinarios.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});
//--------------------------------------------------//
// -------------------------------PRUEBA CORS NUEVA ---------------------------- //
// server.use(cors())
// server.use(express.json());
// const allowedOrigins = ['http://localhost:3000', 'https://sazones-culinarios.vercel.app'];
// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// };
// server.use(cors(options));
// server.use(cors({
//   origin: 'https://sazones-culinarios.vercel.app'
// }))
// ------------------------------- FIN PRUEBA CORS NUEVA ----------------------- //
server.use('/api', index_1.default);
server.use((0, cors_1.default)());
// server.use(cors({
//   credentials: false,
//   origin: '*',
// }));
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
server.use((err, _req, res, _next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send({ message });
});
