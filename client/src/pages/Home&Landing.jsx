import Home from './Home'
import Landing from './Landing'

export default function HomeLanding ({isLoggedIn}) {
    return (
        isLoggedIn ?
            <Home isLoggedIn={isLoggedIn}/> :
            <Landing />
    )
}