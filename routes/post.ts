import { Response, Router } from "express";
import { verificationToken } from "../middlewares/authentication";
import { Post } from "../models/post";


const postRoutes = Router();


postRoutes.post('/create', [ verificationToken ], (req: any, res: Response) => {
    
    const body = req.body;
    body.user = req.user._id;

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





export default postRoutes;