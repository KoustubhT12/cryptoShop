import express from 'express' ;
import USER from '../Models/User.Model.js';
import bcryptjs from 'bcryptjs';

const router = express.Router();

router.post('/',async(req,res)=> {

  const {username,secretcode} = req.body; 

  const exist = await USER.findOne({username:username});
   
  // checking if there is a username with that value or not 
  if(!exist){
    return res.status(400).json({
       success:false,
       message:"The username does not exist"
    })
   }
   else if(exist){
   const secretcodeBool =  await bcryptjs.compare(secretcode,exist.secretcode.toString())
    if(!secretcodeBool){
      return res.status(400).json({
        success:false,
        message:"Incorrect Recovery Code"});
   }
     return res.status(200).json({
        success:true
     })
   }
       



});

export default router;