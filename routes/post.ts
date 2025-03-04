import { Response, Router } from "express";
import { verificationToken } from "../middlewares/authentication";
import { Post } from "../models/post";
import { FileUpload } from "../interfaces/file-upload";
import FileSystem from "../classes/file-system";


const postRoutes = Router();
const fileSystem = new FileSystem();


postRoutes.get('/', async (req: any, res: Response) => {

    //Obtener los posts paginados ordenados de forma descendente
    let page = Number(req.query.page) || 1;
    let skip = page -1;
    skip = skip * 10;

    const posts = await Post.find().sort({ _id: -1 }).skip( skip ).limit(10).populate('user','-password').exec();


    res.json({
        ok: true,
        page,
        posts
    });


});

postRoutes.post('/create', [ verificationToken ], (req: any, res: Response) => {

    //creacion del post con los datos de la request y el usuario relacionado
    const body = req.body;
    body.user = req.user._id;

    const images = fileSystem.moveImageFromTempToPost(req.user._id);
    body.imgs = images;

    Post.create( body ).then( async postDB => {
        await postDB.populate('user', '-password');
        res.json({
            ok:true,
            post: postDB
        });

    }).catch( err => {
        console.log(err);
        res.status(400).json({
            ok: false,
            message: 'Error al crear el post'
        });
    });


});


postRoutes.post('/upload', [ verificationToken ], async (req: any, res: Response):Promise<any>  => {
    
    //Servicio para subir archivos (imgs)
    if( !req.files ){
        return res.status(400).json({
            ok:false,
            message: 'No se subio ningun archivo o no es del tipo correcto'
        });
    }

    const files:FileUpload[] = req.files.image;
    files.forEach(async file =>{
        if( !file || !file.mimetype.includes('image')  ) {
            return res.status(400).json({
                ok:false,
                message: 'No se subio ningun archivo o no es del tipo correcto'
            });
        }
    
        await fileSystem.saveTempImage( file, req.user._id );
    
        
    });
    res.json({
        ok:true,
        message: 'Archivos almacenados correctamente'
    });
});


postRoutes.get('/image/:id/:img', (req:any, res:Response) => {
    const id = req.params.id;
    const img = req.params.img;
    console.log(id);
    console.log(img);

    const pathImage = fileSystem.getImageUrl(id,img);

    res.sendFile(pathImage);

});

export default postRoutes;