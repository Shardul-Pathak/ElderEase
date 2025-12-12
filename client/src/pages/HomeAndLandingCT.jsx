import Home from './CTHome'
import Landing from './Landing'

export default function HomeLanding ({isLoggedIn}) {
    return (
        isLoggedIn ?
            <Home isLoggedIn={isLoggedIn}/> :
            <Landing />
    )
}