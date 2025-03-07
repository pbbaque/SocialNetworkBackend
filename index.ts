import Server from "./classes/server";
import mongoose from "mongoose";

import cors from 'cors';

import bodyParser from "body-parser";
import fileUpload from "express-fileupload";

import userRoutes from "./routes/user";
import postRoutes from "./routes/post";


const server = new Server();

//Body parser
server.app.use( bodyParser.urlencoded( { extended:true } ) );
server.app.use( bodyParser.json() );

//FileUpload
server.app.use( fileUpload() );

//Configuracion CORS
server.app.use( cors({ origin: true, credentials: true }) );

//Rutas de la aplicacion
server.app.use( '/user', userRoutes );
server.app.use( '/post', postRoutes );

//Conectar BD
mongoose.connect( 'mongodb://localhost:27017/socialnetwork' ).then(() => {
    console.log( 'DB CONNECTED' );
  })
  .catch((err) => {
    if (err) throw err;
  });

//Levantar express
server.start( () => {
    console.log(`Server listen on port ${server.port}`);
})