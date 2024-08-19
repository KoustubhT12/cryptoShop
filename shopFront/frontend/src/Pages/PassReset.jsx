import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PassReset = () => {
     const [UserName , SetUserName] = useState('');
     const [recovery,SetRecovery] = useState('');
     const navigate = useNavigate();



  const RecoveryVerifier = async()=> {
     const Data = { 
        username:UserName,
        secretcode:recovery
     }
     const config = {
             headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON
            }
     }
     try{
     const req = await axios.post("http://localhost:2000/recover",Data,config);
     if(req.data.success){
        navigate('/ResetDisplay',{replace:true})
     }
    }
    catch(error){
     alert('Invalid Credentials');
    }


  }

  const handleSubmit = (e) => { 
      e.preventDefault();
      RecoveryVerifier();
  }




  return (
    <div class="min-h-screen bg-lavender flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
    <h2 className="text-2xl font-bold text-center text-lavender-800 mb-6 text-purple-500">Reset Password</h2>
      <form class="space-y-6" onSubmit={handleSubmit}>
        <div>
        <label for="username" class="block text-sm font-medium text-black">
            Enter Username here:
          </label>
          <input
            type="text"
            id="username" onChange={(e=>SetUserName(e.target.value))}
            class="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-lavender-500 focus:border-lavender-500 text-black bg-inherit"
          required />
          <label for="recovery-code" class="block text-sm font-medium text-black mt-4">
            Enter recovery code for your account here :
          </label>
          <input
            type="text"
            id="recovery-code" onChange={(e)=>SetRecovery(e.target.value)}
            class="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-lavender-500 focus:border-lavender-500 text-black bg-inherit"
         required  />
        </div>
        <button
          type="submit" 
          class="w-full py-2 px-4 bg-lavender-600 text-white font-bold rounded-md hover:bg-lavender-700 focus:outline-none focus:ring focus:ring-lavender-300 bg-purple-500"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  
  )
}

export default PassReset
