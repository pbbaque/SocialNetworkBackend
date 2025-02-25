import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces/user';

const userSchema = new Schema({
    name: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    avatar: {
        type: String,
        default: 'av-1.png'
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'El email es necesario']
    },
    password: {
        type: String,
        require: [true, 'La contraseña es necesaria']
    }
});

export const User = model<IUser>('User', userSchema);