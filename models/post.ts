import {Schema, model} from 'mongoose';
import { IPost } from '../interfaces/post';

const postSchema = new Schema({
    
    created: {
        type: Date
    },
    message: {
        type: String
    },
    img: [
        {
            type: String
        }
    ],
    coords: {
        type: String 
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Debe existir una referencia a un usuario']
    }
    
});

postSchema.pre<IPost>('save', function( next ) {
    this.created = new Date();
    next();
})

export const Post = model<IPost>('Post', postSchema);