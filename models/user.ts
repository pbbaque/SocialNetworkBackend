import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces/user';
import bcrypt from 'bcryptjs';

const userSchema: Schema<IUser> = new Schema({
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

userSchema.method('comparePass', function(password: string = ''): boolean {
    if( bcrypt.compareSync( password, this.password ) ) {
        return true;
    } else {
        return false;
    }
});

export const User = model<IUser>('User', userSchema);