import { useState, useEffect } from 'react';
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
      {role === "ELDER" ?
          <ElderRoutes isLoggedIn={isLoggedIn} handleSetIsLoggedIn={handleSetIsLoggedIn}/> :
          <FamilyRoutes isLoggedIn={isLoggedIn} handleSetIsLoggedIn={handleSetIsLoggedIn}/>
      }
    </>
  )
};