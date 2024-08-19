import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import productRoutes from "./routes/product.route.js"
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json()); // allows us to accept data from the body

app.use("/api/products",productRoutes);

console.log(process.env.MONGO_URL);
app.listen(5000,()=>{
    connectDB();
    console.log("server started at http://localhost:5000")
});

