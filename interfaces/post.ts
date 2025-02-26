export interface IPost extends Document {
    created: Date;
    message: string;
    img: string[];
    coords: string;
    user: string;
}