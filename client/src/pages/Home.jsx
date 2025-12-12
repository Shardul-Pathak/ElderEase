import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

export default function Home (isLoggedIn) {
    return (
        <div className="bg-[#f5f8fa]">
            <Dashboard/>
            <Navbar/>
        </div>
    )
}