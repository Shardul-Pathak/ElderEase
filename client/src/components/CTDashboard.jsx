import { Calendar, Heart, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUsername } from "../services/getUsername";
import addLog from "../services/addSymptomLog"

export default function Dashboard() {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleIntent = (intent) => {
        console.log("Detected Intent:", intent);

        if (intent.intent === "CREATE_REMINDER") {
        }

        if (intent.intent === "LOG_SYMPTOM") {
            addLog(intent.symptom)
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
        <div className="min-h-screen p-4 sm:p-6 pb-28 font-sans max-w-7xl mx-auto">
            <h1 className="text-[#0a7a7a] text-3xl sm:text-4xl font-extrabold">
                Hello, {username}!
            </h1>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
                How can I help you today?
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <a href="/reminders">
                    <div className="border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0_0_#000] bg-white">
                        <Calendar size={40} strokeWidth={2.5} />
                        <h2 className="text-lg sm:text-xl font-extrabold mt-3">My Reminders</h2>
                        <p className="text-gray-600 text-sm">Medicines, appointments, and more</p>
                    </div>
                </a>

                <a href="/checkin">
                <div className="border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0_0_#000] bg-white">
                    <Heart size={40} strokeWidth={2.5} />
                    <h2 className="text-lg sm:text-xl font-extrabold mt-3">Daily Check-In</h2>
                    <p className="text-gray-600 text-sm">How are you feeling today?</p>
                </div>
                </a>

                <a href="/report">
                    <div className="border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0_0_#000] bg-white">
                        <FileText size={40} strokeWidth={2.5} />
                        <h2 className="text-lg sm:text-xl font-extrabold mt-3">Report</h2>
                        <p className="text-gray-600 text-sm">Get Report of Elder</p>
                    </div>
                </a>
            </div>
        </div>
    );
}
