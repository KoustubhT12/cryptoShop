import express from "express";
import USER from "../Models/User.Model.js";           // immports 
import bcryptjs from 'bcryptjs';

const router = express.Router();     // router initialization 

router.post('/',async(req,res)=>{
  try{
  const {username,password,secretcode} = req.body;
  const existingUser = await USER.findOne({username:username});
  if(!username || !password){
     return res.status(400).json({message:"Missing fields",success:false});
  }
  else if(existingUser){
    return res.status(400).json({message:"Username already Exists !",success:false});
  }
  const hashedpass = await bcryptjs.hash(password,10);
  const hashedSecretCode = await bcryptjs.hash(secretcode,10);
  const newUser = new USER({
    username:username,
    password:hashedpass,
    secretcode:hashedSecretCode
  })

    await newUser.save();
    return res.status(200).json({success:true,message:"User created"});
    } 
    catch(error){
        console.log(error);

    }
})

export default router;
