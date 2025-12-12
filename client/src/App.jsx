import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ElderRoutes from './router/ElderRoutes';
import FamilyRoutes from './router/FamilyRoutes';
import checkAuthStatus from './utils/checkAuthStatus';

export default function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const [isLoading, setIsLoading] = useState(true); 

  const handleSetIsLoggedIn = (status) => {
    setIsLoggedIn(status);
  };
  
  useEffect(() => {
    checkAuthStatus(handleSetIsLoggedIn, setRole);
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div className='flex justify-center'>Checking session...</div>;
  }
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={handleSetIsLoggedIn}/>}/>
        <Route path='/signup' element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={handleSetIsLoggedIn}/>}/>
      </Routes>
      {role === "ELDER" ?
          <ElderRoutes isLoggedIn={isLoggedIn} handleSetIsLoggedIn={handleSetIsLoggedIn}/> :
          <FamilyRoutes isLoggedIn={isLoggedIn} handleSetIsLoggedIn={handleSetIsLoggedIn}/>
      }
    </>
  )
};
