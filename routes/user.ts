import { Request, Response, Router } from "express";
import { User } from "../models/user";
import bcrypt from 'bcryptjs';

const userRoutes = Router();

userRoutes.post('/create',( req : Request, res : Response ) => {
    //creacion del usuario con los datos de la request
    const user = {
        name: req.body.name, 
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.body.avatar
    };

    //creacion en la base de datos, obtencion de la respuesta y manejo de errores
    User.create( user ).then( userDB => {
        
        res.json({
            ok: true,
            user: userDB
        });

    }).catch( err => {

        res.json({
            ok: false,
            err
        });

    } );


});

export default userRoutes;