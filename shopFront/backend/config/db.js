import mongoose from "mongoose";

export const connectDB = async () => { 

    try{ 
     const conn = await mongoose.connect(process.env.MONGO_URL);
     console.log(`Mongo Db connected: ${conn.connection.host}`);
    }
    catch(e){ 
        console.log("cannot connect to database");
        process.exit(1);  // One means failure
    }

    }
