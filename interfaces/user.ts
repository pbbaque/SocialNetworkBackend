import { Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email:string;
    password:string;
    avatar: string;

    comparePass(password:string):boolean;
}



