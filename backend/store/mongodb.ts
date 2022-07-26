import mongoose from "mongoose";

async function connect() {
    await mongoose.connect('mongodb://mongod/test')
}

connect()
    .then(() => {console.log('Database connected')})
    .catch((err) => {console.log(err)});

export default connect;