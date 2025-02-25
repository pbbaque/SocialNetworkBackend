import crypto from 'crypto';
import jwt from 'jsonwebtoken';

export default class Token {
    // Genera una clave secreta de 64 bytes
    private static seed: string = crypto.randomBytes(64).toString('hex');
    private static expDate: number = 3600;

    constructor() { }

    static getJwtToken ( payload: any ): string {
        return jwt.sign( { user: payload }, this.seed, { expiresIn: this.expDate } );
    }

    static checkToken ( token: string ) {
        
        return new Promise((resolve, reject) => {
            jwt.verify( token, this.seed, (err:any, decoded:any) => {
                if (err) {
                    reject();
                } else {
                    resolve( decoded );
                }
            });
        });

    }
}