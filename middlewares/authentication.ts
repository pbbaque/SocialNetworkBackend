import { NextFunction, Request, Response } from "express";
import Token from "../classes/token";


export const verificationToken = (req: any, res: Response, next: NextFunction) => {

    const token = req.get('x-token') || '';

    Token.checkToken(token)
        .then( (decoded: any) =>{
            req.user = decoded.user;
            next();
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json({
                ok: false,
                message: 'Token invalido'
            });
        });
}