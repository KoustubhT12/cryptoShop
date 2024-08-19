import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [useForgotPass,setUseForgotPass] = useState(false);
    const navigate = useNavigate();
    const handleUsernameChange = (e) => {
      setUsername(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  



    // Method which Logs in ---------- > 
    const logger = async(USER,PASS)=>{
          const data = {
            username:USER,
            password:PASS
          }
          const config = {
            headers: {
                'Content-Type': 'application/json' // Specify the content type as JSON
            }
        };
        try{
        const res = await axios.post("http://localhost:2000/login",data,config);
      
      if(res.data.success){
        console.log('reached success')
            const token = res.data.token;
            localStorage.setItem('token',token);
            navigate('/Home',{replace:true});
      }
    }
    catch(error){
      alert("Invalid credentials")
      setUseForgotPass(true);
    }
  }
   //method which handles the reset pass navigation -------------> 
     
    const Navreset = () =>  {
          navigate('/ResetPass',{replace:true})
    }

     // Method which handles login form submit -------------------> 
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent form default submission
        logger(username, password);
      };
  
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-500">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-blue-500 mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 bg">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 text-black bg-inherit"
                placeholder="Enter your username"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 bg-inherit text-black"
                placeholder="Enter your password"
                required
              />
            </div>
            {useForgotPass && (
  <div className="text-sm text-gray-700">
    Forgot Password?{' '}
    <button onClick={Navreset} className="text-blue-500 hover:underline">
      Click here
    </button>{' '}
    to Reset
  </div>
)}
            <button
              type='submit'
              className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };
  
export default Login;
