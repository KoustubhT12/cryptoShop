import React, { useState } from 'react'
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';
import { Random } from 'random-js'

const Consumer = () => {
    const [username,setusername] = useState('');
    const [password,setpassword] = useState('');
    const [rePass,setRePass] = useState('');
    const [RedPass , setRedPass] = useState(false);
    const navigate = useNavigate();
    const random = new  Random()

    // verifier method ------

    const Verifier = async(USER,PASS,REPASS)=>{
        if(!USER || !PASS || !REPASS){
            alert("Missing Fields");
            return;
        }
        if(PASS.length < 6 || REPASS.len < 6){
            setRePass(true);
            window.alert("password must be 6 characters minimum");
            setRePass('');
            setpassword('');
            return;
        }
        if(PASS != REPASS){
            alert("Passwords do not Match !");
            return;
        }
        const config = {
            headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON
            }
        };
        const code = random.integer(100000,999999).toString();     // Recovery code Normal Version ----- 
        const data = {                
            username:USER,                                        // data to send
            password:PASS,
            secretcode:code
        };
        const res = await axios.post("http://localhost:2000",data,config);
        if(res.data.success===true){
            alert("User Registered");
            navigate(`/Create/Recovery/${code}`,{ replace: true });
        }
        else{
           seterror(true);
        }
    }
    

  return (
    <div>
       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Title */}
      <div className="text-blue-500 text-3xl font-bold mb-6 -m-20">
        <span  style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)" }} >SERENE SHOP</span>
      </div>
        
    <div className="p-6 bg-white shadow-lg rounded-lg w-80">
      <div className="flex flex-col space-y-4">
        <input
          value={username}
          className="text-md p-2 border border-gray-300 rounded-md bg-inherit text-black"
          placeholder="Username" onChange={(e)=>setusername(e.target.value)}
        />
        <input
          value={password} type="password"
          className="text-md p-2 border border-gray-300 rounded-md bg-inherit text-black"
          placeholder="Password" onChange={(e)=>setpassword(e.target.value)}
          onPaste={(e)=>e.preventDefault()}
          onCopy={(e)=>e.preventDefault()}
        />
        <input
          value={rePass} type="password"
          className="text-md p-2 border border-gray-300 rounded-md bg-inherit text-black"
          placeholder="Re-Enter Password" onChange={(e)=>setRePass(e.target.value)}
          onPaste={(e)=>e.preventDefault()}
          onCopy={(e)=>e.preventDefault()}
        />
        <p className='text-xs text-gray-500'><span className={RedPass ? "text-red-500" : "text-gray-500"}>• Password must be of minimum 6 characters</span> <br></br>• If the entered username is already taken by someone, you won't be able to register it</p>
        <button
          className="bg-blue-800 p-2 border border-black shadow-md rounded-md" onClick={()=>Verifier(username,password,rePass)}
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-gray-600">
                        Already a user? <a href="/login" className="text-blue-500 hover:underline">Click here</a> to sign in.
                    </p>
      </div>
    </div>

     
      

  </div>
    </div>
  )
}

export default Consumer;
