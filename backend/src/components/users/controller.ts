import userStore from "./store";

class UserController {

    async getUsers() {
        return await userStore.getUsers();
    }

    async getUser(username: string) {
        return await userStore.getUser(username);
    }

    async createUser(data: any) {
        return await userStore.createUser(data);
    }

    async updateUser(username: string, data: any) {
        return await userStore.updateUser(username, data);
    }

    async deleteUser(username: string) {
        return await userStore.deleteUser(username);
    }

}

const usersController = new UserController();
export default usersController;