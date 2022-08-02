import { Schema, model, Document } from 'mongoose';

interface IChat extends Document {
    user: String;
    numberClient: String,
    nameClient: String,
    status: String,
}

const schemaUser: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User'},
    numberClient: { type: String, required: true },
    nameClient: { type: String, required: true },
    status: { type: String, require: true }
})

export default model<IChat>("Chat", schemaUser);