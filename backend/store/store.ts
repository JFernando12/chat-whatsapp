import { model } from "mongoose";

class MongoStore {

    Model: any

    constructor(Model: any) {
        this.Model = Model;
    }

    async getUsers() {
        return await this.Model.find();
    }

    async getUser(id: string) {
        return await this.Model.findOne({ id });
    }

    async createUser(data: any) {
        const newUser = new this.Model(data);
        await newUser.save();
        return newUser;
    }

    async updateUser(id: string, data: any) {
        const user = await this.Model.findOneAndUpdate({ id }, { $set: data }, { new: true });
        return user;
    }

    async deleteUser(id: string) {
        await this.Model.deleteOne({ id });
        return `${id} deleted succesfully`;
    }

}

export default MongoStore;