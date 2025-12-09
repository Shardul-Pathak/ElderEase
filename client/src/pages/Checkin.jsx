import React from "react";

export default function Checkin() {

  // Temporary sample data until form is connected later
  const data = {
    mood: "Great",
    medTaken: true,
    sleep: "Good",
    water: "3–5 glasses",
    activity: "Walked"
  };

  return (
    <div className="min-h-screen bg-[#f0f7f7] flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-8">

        {/* Success Icon & Message */}
        <div className="text-center">
          <div className="text-6xl">✔️</div>
          <h1 className="text-3xl font-bold text-teal-700 mt-4">
            Check-In Completed!
          </h1>
          <p className="text-gray-600 mt-2">
            Thank you for updating your health today.
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-[#e8f6f5] p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-teal-700 mb-4">
            Your Check-In Summary
          </h2>

          <div className="space-y-3 text-gray-700">
            <p><span className="font-semibold">Mood:</span> {data.mood}</p>
            <p><span className="font-semibold">Medicines Taken:</span> {data.medTaken ? "Yes" : "No"}</p>
            <p><span className="font-semibold">Sleep Quality:</span> {data.sleep}</p>
            <p><span className="font-semibold">Water Intake:</span> {data.water}</p>
            <p><span className="font-semibold">Activity Level:</span> {data.activity}</p>
          </div>
        </div>

        {/* Suggestions Box */}
        <div className="bg-teal-50 border border-teal-200 p-5 rounded-xl">
          <h3 className="text-lg font-semibold text-teal-800 mb-3">Suggestions for You</h3>
          <ul className="space-y-1 text-gray-700">
            <li>• Stay hydrated today for better energy.</li>
            <li>• Light movement will help you feel active.</li>
            <li>• Try relaxing for 10 minutes if you feel tired.</li>
            <li>• Great job staying consistent with your health!</li>
          </ul>
        </div>

        {/* Motivational Message */}
        <div className="text-center bg-[#f9f9f9] p-4 rounded-xl border">
          <p className="text-gray-700 text-lg">
            🌼 You're doing a wonderful job taking care of yourself. Keep it up!
          </p>
        </div>

        {/* Daily Wellness Tip */}
        <div className="bg-[#fff6e5] p-5 rounded-xl shadow-sm">
          <h3 className="text-lg font-semibold text-yellow-700">
            🌤️ Tip of the Day
          </h3>
          <p className="mt-2 text-gray-700">
            Take a 5-minute stretch break today — it improves mobility and reduces stiffness.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col gap-4 mt-6">

          <button className="w-full py-3 bg-teal-700 text-white rounded-xl font-semibold">
            Go to Home
          </button>

          <button className="w-full py-3 bg-[#e1f5f2] text-teal-800 rounded-xl font-semibold">
            View Today’s Check-In
          </button>

          <button className="w-full py-3 bg-[#e8e8e8] text-gray-800 rounded-xl font-semibold">
            View Previous History
          </button>

          <button className="w-full py-3 bg-red-600 text-white rounded-xl font-semibold">
            Emergency Help
          </button>

        </div>

        {/* Caregiver Notification */}
        <p className="text-center text-gray-500 text-sm mt-4">
          ✔️ Your caregiver has been notified about your check-in.
        </p>

      </div>
    </div>
  );
}
