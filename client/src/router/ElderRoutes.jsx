import { Routes, Route } from 'react-router-dom';
import HomeLanding from '../pages/Home&Landing';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Setting from '../pages/Setting';
import Reminder from '../pages/Reminder';
import CheckList from '../pages/CheckHistory';
import CheckIn from '../pages/CheckIn';
import CheckInForm from '../pages/CheckinForm';
import ProfileForm from '../pages/ProfileForm';
import Emergency from '../pages/Emergency';

export default function ElderRoutes ({isLoggedIn, handleSetIsLoggedIn}) {
    return (
        <Routes>
            <Route path='/' element={<HomeLanding isLoggedIn={isLoggedIn}/>}/>
            <Route path='/home' element={<HomeLanding isLoggedIn={isLoggedIn}/>}/>
            <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={handleSetIsLoggedIn}/>}/>
            <Route path='/signup' element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={handleSetIsLoggedIn}/>}/>
            <Route path='/logout' element={<Logout setIsLoggedIn={handleSetIsLoggedIn}/>}/>
            <Route path='/reminders' element={<Reminder isLoggedIn={isLoggedIn}/>}/>
            <Route path='/checkin' element={<CheckList isLoggedIn={isLoggedIn}/>}/>
            <Route path='/log/:id' element={<CheckIn isLoggedIn={isLoggedIn}/>}/>
            <Route path='/check-in-form' element={<CheckInForm isLoggedIn={isLoggedIn}/>}/>
            <Route path='/emergency' element={<Emergency isLoggedIn={isLoggedIn}/>}/>
            <Route path='/profile' element={<ProfileForm isLoggedIn={isLoggedIn}/>}/>
            <Route path='/settings' element={<Setting isLoggedIn={isLoggedIn}/>}/>
        </Routes>
    )
}