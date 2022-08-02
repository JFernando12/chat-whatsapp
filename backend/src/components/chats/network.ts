import { Router, Request, Response } from 'express';
import chatController from './controller';

class ChatRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    async getChats(req: Request, res: Response) {
        const users = await chatController.getChats();
        res.json(users);
    }

    async getChat(req: Request, res: Response) {
        const user = await chatController.getChat(req.params.username);
        res.json(user);
    }

    async createChat(req: Request, res: Response) {
        const user = await chatController.createChat(req.body);
        res.json(user);
    }

    async updateChat(req: Request, res: Response) {
        const user = await chatController.updateChat(req.params.username, req.body);
        res.json(user);
    }

    async deleteChat(req: Request, res: Response) {
        const content = await chatController.deleteChat(req.params.username);
        res.json(content);
    }

    async routes() {
        this.router.get("/", this.getChats);
        this.router.get("/:username", this.getChat);
        this.router.post("/", this.createChat);
        this.router.put("/:username", this.updateChat);
        this.router.delete("/:username", this.deleteChat);
    }

}

const chatRoutes = new ChatRoutes();
export default chatRoutes.router;