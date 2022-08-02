import Chat from "./model";

class ChatStore {

    async getChats() {
        return await Chat.find();
    }

    async getChat(username: string) {
        return await Chat.findOne({ username });
    }

    async createChat(data: any) {
        const newUser = new Chat(data);
        await newUser.save();
        return newUser;
    }

    async updateChat(username: string, data: any) {
        const user = await Chat.findOneAndUpdate({ username }, { $set: data }, { new: true });
        return user;
    }

    async deleteChat(username: string) {
        await Chat.deleteOne({ username });
        return `Chat ${username} deleted succesfully`;
    }

}

const chatStore = new ChatStore();
export default chatStore;