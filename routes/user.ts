import { Request, Response, Router } from "express";
import { User } from "../models/user";
import bcrypt from 'bcryptjs';
import Token from "../classes/token";
import { verificationToken } from "../middlewares/authentication";

const userRoutes = Router();


userRoutes.get('/', verificationToken, (req: any, res: Response) => {
    const user = req.user;
    res.json({
        ok:true,
        user
    });
});

userRoutes.post('/login', (req: Request, res: Response) => {
    //login del usuario con los datos de la request
    const body = req.body;
    User.findOne({email:body.email}).then((userDB) => {
        if(!userDB) {
            return res.json({
                ok:false,
                message: 'Usuario o contraseña incorrectos'
            });
        }

        if( userDB.comparePass(body.password)) {

            const token = Token.getJwtToken({
                _id: userDB._id,
                name: userDB.name,
                email: userDB.email,
                avatar: userDB.avatar
            });

            res.json({
                ok: true,
                token: token
            });
        } else {
            res.status(400).json({
                ok: false,
                message: 'Usuario o contraseña incorrectos'
            });
        }
    }).catch((err) => {
        res.status(500).json({
            ok: false,
            err,
            message: 'Error en el servidor'
        });
    });
});

userRoutes.post('/create',( req : Request, res : Response ) => {
    //creacion del usuario con los datos de la request
    const body = req.body;
    const user = {
        name: body.name, 
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        avatar: body.avatar
    };

    //creacion en la base de datos, obtencion de la respuesta y manejo de errores
    User.create( user ).then( userDB => {

        const token = Token.getJwtToken({
            _id: userDB._id,
            name: userDB.name,
            email: userDB.email,
            avatar: userDB.avatar
        });

        res.json({
            ok: true,
            token: token
        });

    }).catch( err => {
        console.log(err);
        res.status(400).json({
            ok: false,
            message: 'Error al generar el usuario'
        });

    } );


});

userRoutes.put('/update', verificationToken, (req: any, res: Response) => {
    //actualizacion del usuario con los datos de la request
    const body = req.body;
    const user = {
        name: body.name || req.user.name,
        email: body.email || req.user.email,
        avatar: body.avatar || req.user.avatar
    }

    User.findByIdAndUpdate(req.user._id, user, { new: true })
    .then( userDB => {
        if( !userDB ) {
            return res.status(404).json({
                ok: false,
                message: 'No existe el usuario'
            });
        }

        const token = Token.getJwtToken({
            _id: userDB._id,
            name: userDB.name,
            email: userDB.email,
            avatar: userDB.avatar
        });

        res.json({
            ok: true,
            token: token
        });

    })
    .catch( err => {
        console.log(err)
        res.status(400).json({
            ok: false,
            message: 'Error al actualizar el usuario'
        });
    });
    
});

userRoutes.delete('/delete', verificationToken, (req: any, res: Response) => {
    User.findByIdAndDelete(req.user._id)
    .then( userDB => {
        if( !userDB ) {
            return res.status(404).json({
                ok: false,
                message: 'No existe el usuario'
            });
        }

        res.json({
            ok: true,
            message: `El usuario ${userDB.email} ha sido eliminado`
        });

    })
    .catch(err => {
        console.log(err)
        res.status(400).json({
            ok: false,
            message: 'Error al eliminar el usuario'
        });
    });
});

export default userRoutes;