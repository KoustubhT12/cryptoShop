import CreatePage from './Pages/CreatePage'
import HomePage from './Pages/HomePage'
import Navbar from './Components/Navbar'
import {Route,Routes } from "react-router-dom"
import Consumer from './Pages/Consumer'
import Mainer from './Pages/Mainer'
import Login from './Pages/Login'
import Recovery from './Pages/Recovery'
import ProtectedRoute from './Routes/ProtectedRoute';
import LogOutNav from './Components/LogOutNav';
import PassReset from './Pages/PassReset';
import ActualPassReset from './Pages/ActualPassReset'
function App() {
 return (     

  <div> 
    
    <Routes> 
      <Route path="/" element={<Consumer/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path='/Create/Recovery/:code' element={<Recovery/>}/>
      <Route path='/ResetPass' element={<PassReset />}/>
      <Route path='/ResetDisplay' element={<ActualPassReset />}/>
      <Route path='/Home' element={<ProtectedRoute><LogOutNav/><HomePage/></ProtectedRoute>}/>
    </Routes>
  </div>
  
 );
}

export default App;
