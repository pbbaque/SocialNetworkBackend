export interface IPost extends Document {
    created: Date;
    message: string;
    imgs: string[];
    coords: string;
    user: string;
}