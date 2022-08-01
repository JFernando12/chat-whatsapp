import { Router, Request, Response } from 'express';
import userController from './controller';

class UserRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    async getUsers(req: Request, res: Response) {
        const users = await userController.getUsers();
        res.json(users);
    }

    async getUser(req: Request, res: Response) {
        const user = await userController.getUser(req.params.username);
        res.json(user);
    }

    async createUser(req: Request, res: Response) {
        const user = await userController.createUser(req.body);
        res.json(user);
    }

    async updateUser(req: Request, res: Response) {
        const user = await userController.updateUser(req.params.username, req.body);
        res.json(user);
    }

    async deleteUser(req: Request, res: Response) {
        const content = await userController.deleteUser(req.params.username);
        res.json(content);
    }

    async routes() {
        this.router.get("/", this.getUsers);
        this.router.get("/:username", this.getUser);
        this.router.post("/", this.createUser);
        this.router.put("/:username", this.updateUser);
        this.router.delete("/:username", this.deleteUser);
    }

}

const userRoutes = new UserRoutes();
export default userRoutes.router;