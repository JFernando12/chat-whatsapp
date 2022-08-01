import express, { Application, json, urlencoded } from 'express';
import morgan from 'morgan';
import config from '../config';
import MongoConnect from '../store/mongodb';
import userRoutes from './components/users/network';

class Server {

    app: Application

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config() {
        this.app.use(json());
        this.app.use(urlencoded({ extended: false }));
        this.app.use(morgan("dev"));
        MongoConnect();
    }

    routes() {
        this.app.use("/api/users", userRoutes);
    }

    start() {
        this.app.listen(config.port, () => {
            console.log("Server on port: ", config.port);
        })
    }

}

const server = new Server();
server.start();