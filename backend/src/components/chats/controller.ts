import ChatStore from "./store";

class ChatController {

    async getChats() {
        return await ChatStore.getChats();
    }

    async getChat(username: string) {
        return await ChatStore.getChat(username);
    }

    async createChat(data: any) {
        return await ChatStore.createChat(data);
    }

    async updateChat(username: string, data: any) {
        return await ChatStore.updateChat(username, data);
    }

    async deleteChat(username: string) {
        return await ChatStore.deleteChat(username);
    }

}

const chatController = new ChatController();
export default chatController;