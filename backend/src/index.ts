import express from 'express';
import morgan from 'morgan';
import config from '../config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.listen(config.port, () => {
    console.log("Server on port: ", config.port)
})
