import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import SignUp from './Routers/SignUp.js'
import ConnectDB from "./DBconfig/ConnectDB.js";
import ClearAll from './Routers/ClearAll.js'
import Logger from './Routers/Logger.js'
import Recovery from './Routers/Recovery.js'
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/',SignUp)
app.use('/delete',ClearAll);
app.use('/login',Logger);
app.use('/recover',Recovery);


app.listen(process.env.PORT || 3000 , async()=> {
      console.log(`connected to port number ${process.env.PORT}`);
      await ConnectDB();
})