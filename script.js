require('dotenv').config();
const logger = require("morgan");
const cors = require("cors");
const express = require('express');
const HTTPSTATUSCODE = require('./src/utils/httpStatusCode');
const mongoSanitize = require('express-mongo-sanitize');

const connectMongo = require('./src/utils/db');
 
connectMongo();

 const piensoRoutes = require("./src/api/routes/pienso.routes");
 const perrosRoutes = require("./src/api/routes/perros.routes");
 const gatosRoutes = require("./src/api/routes/gatos.routes");
 const userRouter = require("./src/api/routes/user.routes");
 const marcaRouter = require("./src/api/routes/marca.routes")
 
 const app= express();

app.use("/pienso", piensoRoutes);
app.use("/pienso/perros", perrosRoutes);
app.use("/pienso/gatos", gatosRoutes);
app.use('/api/users', userRouter);
app.use('/api/marca/', userRouter);



//  connect();
app.use(express.json());
app.use(mongoSanitize());

 app.use((req, res, next) => {
   res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE');
   res.header('Access-Control-Allow-Credentials', true);
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   next();
});
app.use(cors({
   origin: ['http://localhost:3000', 'http://localhost:4200'],
   credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.set("secretKey", "nodeRestApi");
// app.set("secretkey" , process.env.JWT_SECRET)

/* ROUTES */

app.get('/', (request, response) => {
   response.status(200).json({
       message: 'Welcome to server',
       app: 'My App'
   });
});

//fallo de error
app.use((request, response, next) => {
   let error = new Error();
   error.status = 404;
   error.message = HTTPSTATUSCODE[404];
   next(error);
 });

app.use((error, request, response, next) => {
   return response.status(error.status || 500).json(error.message || 'Unexpected error');
})

app.disable('x-powered-by');

/* DEFINIR EL PUERTO E INICIAR LA ESCUCHA */

app.listen(process.env.PORT, () => {
   console.log(`app running in port ${process.env.PORT}`)
});
