import Server from "./classes/server";
import userRoutes from "./routes/user";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import postRoutes from "./routes/post";


const server = new Server();

//Body parser
server.app.use( bodyParser.urlencoded( { extended:true } ) );
server.app.use( bodyParser.json() );

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