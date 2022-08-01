import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
    username: String;
}

const schemaUser: Schema = new Schema({
    username: { type: String, required: true }
})

export default model<IUser>("User", schemaUser);