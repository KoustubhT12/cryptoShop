import mongoose from "mongoose";

const ConnectDB = async()=> {
     const conn = await mongoose.connect(process.env.MONGO_URI);
     console.log(`host name: ${conn.connection.host}`);

}

export default ConnectDB;
