import { useState, useEffect } from "react";
import NotAuthorized from '../components/NotAuthorized'
import getProfile from '../services/getProfile';
import {getAssociateUsername} from "../services/getUsername";

export default function Settings({isLoggedIn}) {
    const [profile, setProfile] = useState({
        name: "",
        age: 0,
        gender: "",
        bio: "" 
    });
    const [associatedElder, setAssociatedElder] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const data = await getProfile();
            if(data.associatedElders[0]) {
                const name = await getAssociateUsername(data.associatedElders[0]);
                setAssociatedElder(name);
            }
            setProfile(data);
        }
        fetchData();
    }, []);

    if (!isLoggedIn) {
        return (
            <NotAuthorized />
        );
    }

    return (
        <div className="min-h-screen bg-[#f0f7f7] flex justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-8">
            <h1 className="text-3xl font-bold text-teal-700 text-center">
            Settings
            </h1>

            <div className="bg-teal-50 p-5 rounded-xl border border-teal-200">
            <h2 className="text-xl font-semibold text-teal-800 mb-3">
                Profile
            </h2>

            <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Name: {profile.name}</span> </p>
                <p><span className="font-semibold">Age: {profile.age}</span> </p>
                <p><span className="font-semibold">Gender: {profile.gender}</span> </p>
                <p><span className="font-semibold">Associated Elder: {associatedElder}</span> </p>
                <p><span className="font-semibold">Bio: {profile.bio}</span> </p>
                <a href="/profile">
                    <button className="mt-3 px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800">
                        Edit Profile
                    </button>
                </a>
            </div>
            </div>
            <a href="/home">
                <button className="w-full py-3 bg-teal-700 text-white rounded-xl font-semibold mt-6 hover:bg-teal-800">
                    Go To Home Page
                </button>
            </a>
            <a href="/logout">
                <button className="w-full py-3 bg-red-600 hover:bg-red-800 text-white rounded-xl font-semibold mt-6">
                    Log Out
                </button>
            </a>
        </div>
    </div>
  );
}
