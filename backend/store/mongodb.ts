import mongoose from "mongoose";

async function connect() {
    await mongoose.connect('url')
}

connect()
    .then(() => {console.log('Database connected')})
    .catch((err) => {console.log(err)});