import { Routes, Route } from 'react-router-dom'
import HomeLanding from '../pages/HomeAndLandingCT';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Setting from '../pages/CTSetting';
import Logout from '../pages/Logout';
import CheckList from '../pages/CTCheckInHistory';
import CheckIn from '../pages/CheckIn';
import ProfileForm from '../pages/CTProfileForm';
import Reminder from '../pages/CTReminder';
import Report from '../pages/Report';

export default function FamilyRoutes ({isLoggedIn, handleSetIsLoggedIn}) {
    return (
        <Routes>
            <Route path='/' element={<HomeLanding isLoggedIn={isLoggedIn}/>}/>
            <Route path='/home' element={<HomeLanding isLoggedIn={isLoggedIn}/>}/>
            <Route path='/login' element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={handleSetIsLoggedIn}/>}/>
            <Route path='/signup' element={<Signup isLoggedIn={isLoggedIn} setIsLoggedIn={handleSetIsLoggedIn}/>}/>
            <Route path='/logout' element={<Logout setIsLoggedIn={handleSetIsLoggedIn}/>}/>
            <Route path='/reminders' element={<Reminder isLoggedIn={isLoggedIn}/>}/>
            <Route path='/checkin' element={<CheckList isLoggedIn={isLoggedIn}/>}/>
            <Route path='/profile' element={<ProfileForm isLoggedIn={isLoggedIn}/>}/>
            <Route path='/log/:id' element={<CheckIn isLoggedIn={isLoggedIn}/>}/>
            <Route path='/report' element={<Report isLoggedIn={isLoggedIn}/>}/>
            <Route path='/settings' element={<Setting isLoggedIn={isLoggedIn}/>}/>
        </Routes>
    )
}