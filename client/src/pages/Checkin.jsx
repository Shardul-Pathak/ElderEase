import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NotAuthorized from '../components/NotAuthorized';
import getLog from '../services/getLogById';

export default function Checkin({isLoggedIn}) {
  const { id } = useParams();  
  const [log, setLog] = useState({
    mood: "",
    sleep: "",
    water: "",
    activity: "",
  });

  useEffect(() => {
    const fetchLog = async() => {
        const data = await getLog(id);
        setLog(data);
    }
    fetchLog();
  },[])

  if (!isLoggedIn) {
    return (
        <NotAuthorized />
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f7f7] flex justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-8">
        <div className="text-left relative">
        <div className="absolute -bottom-2 left-0 w-24 h-1 bg-teal-200 rounded-full"></div>
        <h2 className="text-4xl font-bold text-teal-800 tracking-wide">
            {new Date(`${log.date}`).toLocaleDateString("en-US", { weekday: "long" })}
        </h2>
        <p className="text-lg text-teal-700 mt-1">
            {new Date(`${log.date}`).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
            })}
        </p>
        <p className="text-md text-gray-600 mt-1">
            {new Date(`${log.date}`).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            })}
        </p>

        </div>
            <div className="bg-[#e8f6f5] p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-teal-700 mb-4">
                Your Check-In Summary
            </h2>

            <div className="space-y-3 text-gray-700">
                { log.hasOwnProperty('symptom') ?
                    <p><span className="font-semibold">Symptom:</span> {log.symptom.toUpperCase()}</p> :
                    <>
                        <p><span className="font-semibold">Mood:</span> {log.mood.toUpperCase()}</p>
                        <p><span className="font-semibold">Medicines Taken:</span> {log.medicine ? "Yes" : "No"}</p>
                        <p><span className="font-semibold">Sleep Quality:</span> {log.sleep.toUpperCase()}</p>
                        <p><span className="font-semibold">Water Intake:</span> {log.water.toUpperCase()}</p>
                        <p><span className="font-semibold">Activity Level:</span> {log.activity.toUpperCase()}</p>
                    </>
                }
            </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 p-5 rounded-xl">
            <h3 className="text-lg font-semibold text-teal-800 mb-3">Suggestions for You</h3>
            <ul className="space-y-1 text-gray-700">
                <li>• Stay hydrated today for better energy.</li>
                <li>• Light movement will help you feel active.</li>
                <li>• Try relaxing for 10 minutes if you feel tired.</li>
                <li>• Great job staying consistent with your health!</li>
            </ul>
            </div>

            <div className="text-center bg-[#f9f9f9] p-4 rounded-xl border">
            <p className="text-gray-700 text-lg">
                🌼 You're doing a wonderful job taking care of yourself. Keep it up!
            </p>
            </div>

            <div className="bg-[#fff6e5] p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-yellow-700">
                🌤️ Tip of the Day
            </h3>
            <p className="mt-2 text-gray-700">
                Take a 5-minute stretch break today — it improves mobility and reduces stiffness.
            </p>
            </div>

            <div className="flex flex-col gap-4 mt-6">

            <a href="/home">   
                <button className="w-full py-3 bg-teal-700 text-white rounded-xl font-semibold">
                    Go to Home
                </button>
            </a> 

            <a href="/checkin">
                <button className="w-full py-3 bg-[#e8e8e8] text-gray-800 rounded-xl font-semibold">
                    View Previous History
                </button>
            </a>     
            <a href='/emergency'>
                <button className="w-full py-3 bg-red-600 text-white rounded-xl font-semibold">
                    Emergency Help
                </button>
            </a>
            </div>

            <p className="text-center text-gray-500 text-sm mt-4">
                ✔️ Your caregiver has been notified about your check-in.
            </p>

        </div>
    </div>
  );
}
