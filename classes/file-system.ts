import { FileUpload } from "../interfaces/file-upload";

import path from 'path';
import fs from 'fs';
import uniqid from 'uniqid';

export default class FileSystem {
    constructor() { };

    saveTempImage( file: FileUpload, id: string ){

        return new Promise<void>( (resolve, reject) => {

            //Crear carpeta del usuario con su id y carpeta temporal
            const path = this.createUserFolder( id );
    
            //Crear nombre unico archivo 
            const fileName = this.createFileName( file.name );
            
            //Mover archivo de temp a la carpeta del usuario
            file.mv( `${ path }/${ fileName }`, (err: any) => {
                if( err ){
                    //No se pudo almacenar
                    reject(err);
                } else {
                    //Almacenado correctamente
                    resolve();
                }
            });

        });
        
    }

    private  createUserFolder( id: string ): string {

        const pathUser = path.resolve( __dirname, '../uploads/', id );
        const pathUserTemp = pathUser + '/temp';

        const exists = fs.existsSync( pathUser );

        if( !exists ) {
            fs.mkdirSync( pathUser );
            fs.mkdirSync( pathUserTemp );
        }

        return pathUserTemp;
    }

    private createFileName( originalName: string ): string {
        const nameArr = originalName.split('.');
        const extension = nameArr[ nameArr.length -1 ];

        const uniqueId = uniqid();

        return `${uniqueId}.${extension}`;
    }

    moveImageFromTempToPost( id:string ){
        const pathUserTemp = path.resolve( __dirname, '../uploads/', id, 'temp' );
        const pathUserPosts = path.resolve( __dirname, '../uploads/', id, 'posts' );

        if( !fs.existsSync( pathUserTemp ) ){
            return [];
        }

        if( !fs.existsSync( pathUserPosts ) ){
            fs.mkdirSync( pathUserPosts );
        }

        const tempImages = this.getImagesTemp( id );

        tempImages.forEach( image => {
            fs.renameSync( `${ pathUserTemp }/${ image }`, `${ pathUserPosts }/${ image }` );
        });

        return tempImages;
    }

    private getImagesTemp( id: string) {
        const pathUserTemp = path.resolve( __dirname, '../uploads/', id, 'temp' );
        
        return fs.readdirSync( pathUserTemp ) || [];

    }

    getImageUrl(id: string, img: string): string {
        const pathImage = path.resolve( __dirname, '../uploads/', id, 'posts', img );

        if( !fs.existsSync( pathImage ) ){
            return path.resolve( __dirname, '../assets/400x250.jpg');
        }

        return pathImage;
    }
}