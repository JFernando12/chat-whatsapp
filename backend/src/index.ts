import express from 'express';
import morgan from 'morgan';
import config from '../config';
import connect from '../store/mongodb';
import users from './components/users/network';

const app = express();

//MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

//Routes
app.use('/api/users', users);

app.listen(config.port, () => {
    console.log("Server on port: ", config.port)
})
