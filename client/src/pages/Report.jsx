import { useState, useEffect } from "react";
import getLogs from "../services/getLogsCT";
import getReport from "../services/getReport";
import NotAuthorized from "../components/NotAuthorized";

export default function ReportPage({ isLoggedIn }) {
    const [report, setReport] = useState({
        overallWellness: "",
        moodTrends: "",
        sleepQuality: "",
        activityLevel: "",
        waterIntake: "",
        textSummary: ""
    })

    useEffect(() => {
        const fetchReport = async () => {
            const data = await getLogs();
            console.log(data);
            const reportData = await getReport(data);
            setReport(reportData);
        }
        fetchReport();
    },[])

    if (!isLoggedIn) return <NotAuthorized />;
    return (
    <div className="min-h-screen bg-[#f0f7f7] flex justify-center px-4 py-10">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-8">
            
            <div className="text-left relative">
            <div className="absolute -bottom-2 left-0 w-24 h-1 bg-teal-200 rounded-full"></div>
            <h2 className="text-4xl font-bold text-teal-800 tracking-wide">Health Report</h2>
            <p className="text-lg text-teal-700 mt-1">
                A detailed summary based on your recent activity and Logs.
            </p>
            </div>

            <div className="bg-[#e8f6f5] p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold text-teal-700 mb-4">
                Report Summary
            </h2>

            <div className="space-y-3 text-gray-700">
                <p><span className="font-semibold">Overall Wellness:</span> {report.overallWellness}</p>
                <p><span className="font-semibold">Mood Trends:</span> {report.moodTrends}</p>
                <p><span className="font-semibold">Sleep Quality:</span> {report.sleepQuality}</p>
                <p><span className="font-semibold">Activity Level:</span> {report.activityLevel}</p>
                <p><span className="font-semibold">Water Intake:</span> {report.waterIntake}</p>
                <p><span className="font-semibold">Text Summary:</span> {report.textSummary}</p>
            </div>
            </div>

            <div className="bg-[#fff6e5] p-5 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-yellow-700">🌤️ Tip</h3>
            <p className="mt-2 text-gray-700">
                Try maintaining a simple journal — it improves emotional clarity and helps you track daily progress.
            </p>
            </div>

            <div className="flex flex-col gap-4">
            <a href="/home">
                <button className="w-full py-3 bg-teal-700 text-white rounded-xl font-semibold">
                Go to Home
                </button>
            </a>

            <a href="/checkin">
                <button className="w-full py-3 bg-[#e8e8e8] text-gray-800 rounded-xl font-semibold">
                Go to Check-In
                </button>
            </a>
            </div>

        </div>
    </div>
  );
}
