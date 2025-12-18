import { Calendar, Heart, Phone, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Voice from "./Voice";
import { getUsername } from "../services/getUsername";
import addLog from "../services/addSymptomLog";
import addReminder from "../services/addReminderVoice";

export default function Dashboard() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleIntent = (intent) => {
        console.log("Detected Intent:", intent);

        if (intent.intent === "CREATE_REMINDER") {
            addReminder(intent);
        }

        if (intent.intent === "LOG_SYMPTOM") {
            addLog(intent.symptom);
        }

        if (intent.intent === "EMERGENCY") {
            navigate('/emergency');
        }

        if (intent.intent === "NAVIGATE") {
            navigate(`/${intent.target}`)
        }
    };

    useEffect(() => {
        const fetchUsername = async () => {
            const name = await getUsername();
            setUsername(name);
        };
        fetchUsername();
    }, [])

    return (
        <div className="text-[#0a7a7a] min-h-screen p-4 sm:p-6 pb-28 font-sans max-w-7xl mx-auto">
            <h1 className="text-[#0a7a7a] text-3xl sm:text-4xl font-extrabold">
                Hello, {username}!
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
                How can I help you today?
            </p>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <a href="/reminders">
                    <div className="border-2 border-teal-700 rounded-2xl p-5 shadow-[4px_4px_0_0_#0a7a7a] bg-white">
                        <Calendar size={40} strokeWidth={2.5} />
                        <h2 className="text-lg sm:text-xl font-extrabold mt-3">My Reminders</h2>
                        <p className="text-gray-600 text-sm">Medicines, appointments, and more</p>
                    </div>
                </a>

                <a href="/checkin">
                <div className="border-2 border-teal-700 rounded-2xl p-5 shadow-[4px_4px_0_0_#0a7a7a] bg-white">
                    <Heart size={40} strokeWidth={2.5} />
                    <h2 className="text-lg sm:text-xl font-extrabold mt-3">Daily Check-In</h2>
                    <p className="text-gray-600 text-sm">How are you feeling today?</p>
                </div>
                </a>

                <a href="/emergency">
                    <div className="border-2 border-teal-700 rounded-2xl p-5 shadow-[4px_4px_0_0_#0a7a7a] bg-white">
                        <Phone size={40} strokeWidth={2.5} />
                        <h2 className="text-lg sm:text-xl font-extrabold mt-3">Emergency Contacts</h2>
                        <p className="text-gray-600 text-sm">Manage your contacts</p>
                    </div>
                </a>
                
                <div className="border-2 border-teal-700 rounded-2xl p-5 shadow-[4px_4px_0_0_#0a7a7a] bg-white relative">
                    <AlertTriangle size={40} strokeWidth={2.5} />
                    <h2 className="text-lg sm:text-xl font-extrabold mt-3">Need Help?</h2>
                    <p className="text-gray-600 text-sm">Press the SOS Button</p>
                    <button className="
                        absolute right-4 bottom-4 
                        w-14 h-14 sm:w-16 sm:h-16 
                        rounded-full bg-red-600 text-white
                        border-white font-bold text-sm sm:text-base 
                        shadow-[4px_4px_0_0_rgba(0,0,0,0.4)]
                    ">
                        SOS
                    </button>
                </div>
            </div>
            <div className="fixed bottom-24 left-10 sm:right-10 z-50">
                <Voice onIntentDetected={handleIntent}/>
            </div>
        </div>
    );
}
