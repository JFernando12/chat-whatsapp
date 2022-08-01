import User from "./model";

class UserStore {

    async getUsers() {
        return await User.find();
    }

    async getUser(username: string) {
        return await User.findOne({ username });
    }

    async createUser(data: any) {
        const newUser = new User(data);
        await newUser.save();
        return newUser;
    }

    async updateUser(username: string, data: any) {
        const user = await User.findOneAndUpdate({ username }, { $set: data }, { new: true });
        return user;
    }

    async deleteUser(username: string) {
        await User.deleteOne({ username });
        return `User ${username} deleted succesfully`;
    }

}

const userStore = new UserStore();
export default userStore;