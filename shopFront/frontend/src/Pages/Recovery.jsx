import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Recovery = () => {
    const {code} = useParams();
    const navigate = useNavigate();

    setTimeout(()=>{
       navigate('/login')
    },8000);                                  // This page will stay till eight seconds

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full">
      <p className="text-gray-700 text-base mb-4">
        Your Recovery Code is  :  
        <span className="text-blue-500 text-xl font-bold"> {code}</span>
      </p>
      <p className="text-gray-600 text-sm">
        Kindly note it down! It will help you recover your account and reset your password in the future.
      </p>
    </div>
  </div>
);
};


export default Recovery;
