import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogOutNav = () => {

 const navigate = useNavigate();


 const Logout = () => {
    localStorage.removeItem('token');
    navigate("/login");
   
 }
  return (
    <div class="relative bg-black p-6 max-w-7xl mx-auto">
    <div class="flex justify-between items-center">

    <div class="flex-grow"></div>
    
    <button class="bg-red-600 text-white font-semibold py-1 px-2 rounded-md absolute right-4 top-1/2 transform -translate-y-1/2" onClick={Logout}>
      Log Out
    </button>
  </div>
</div>
  )
}

export default LogOutNav;
