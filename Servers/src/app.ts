import express from 'express';
import routes from './routes/index';
// import passport from 'passport';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import './config/MongoDb/Db';
import cors from 'cors';

const server = express();


//-------------------cors config--------------------//
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
// server.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');  
//   res.header('Access-Control-Allow-Credentials', 'false'); //true
//   res.header('Access-Control-Allow-Headers', '*');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });
//--------------------------------------------------//

// -------------------------------PRUEBA CORS NUEVA ---------------------------- //

// server.use(cors())
// server.use(express.json());

// const allowedOrigins = ['http://localhost:3000', 'https://sazones-culinarios.vercel.app'];

// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// };

// server.use(cors(options));


server.use(cors({
  origin: 'https://localhost:3000'
}))
// ------------------------------- FIN PRUEBA CORS NUEVA ----------------------- //


server.use('/api', routes);
// server.use(cors())
// server.use(cors({
//   credentials: false,
//   origin: '*',
// }));

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
server.use((err:any, _req:any, res:any, _next:any) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send({message});
});



export { server };