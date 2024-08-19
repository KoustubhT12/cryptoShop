import USER from "../Models/User.Model.js";
import express from 'express';


const router = express.Router();

router.get("/",async(req,res)=> {
    await USER.deleteMany({});
    return res.status(200).json({success:true,message:"all files deleted from DB."})
});

export default router; 
