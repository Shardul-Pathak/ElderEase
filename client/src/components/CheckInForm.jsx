import React, { useState } from "react";

export default function CheckInForm() {
  const [mood, setMood] = useState("");
  const [medTaken, setMedTaken] = useState(null);
  const [sleep, setSleep] = useState("");
  const [water, setWater] = useState("");
  const [activity, setActivity] = useState("");

  return (
    <div className="min-h-screen bg-[#f0f7f7] flex flex-col items-center py-10 px-4">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-teal-700 mb-6">Please Fill the Check-in Form</h1>

      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-6 space-y-6">

        {/* Mood Section */}
        <div>
          <p className="text-xl font-semibold mb-3">How are you feeling today?</p>
          <div className="grid grid-cols-3 gap-4">
            
            <button onClick={() => setMood("great")}
              className={`p-4 rounded-xl border-2 ${
                mood === "great" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              😊 <p className="font-medium">Great</p>
            </button>

            <button onClick={() => setMood("okay")}
              className={`p-4 rounded-xl border-2 ${
                mood === "okay" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              😐 <p className="font-medium">Okay</p>
            </button>

            <button onClick={() => setMood("bad")}
              className={`p-4 rounded-xl border-2 ${
                mood === "bad" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              😟 <p className="font-medium">Not Good</p>
            </button>

          </div>
        </div>

        {/* Medicines Section */}
        <div>
          <p className="text-xl font-semibold mb-3">Did you take your medicines?</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setMedTaken(true)}
              className={`px-6 py-2 rounded-full font-semibold ${
                medTaken === true
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              YES
            </button>

            <button
              onClick={() => setMedTaken(false)}
              className={`px-6 py-2 rounded-full font-semibold ${
                medTaken === false
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              NO
            </button>
          </div>
        </div>

        {/* Sleep Quality */}
        <div>
          <p className="text-xl font-semibold mb-3">How was your sleep?</p>
          <div className="grid grid-cols-3 gap-4">

            <button onClick={() => setSleep("good")}
              className={`p-4 rounded-xl border-2 ${
                sleep === "good" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              😴 <p className="font-medium">Good</p>
            </button>

            <button onClick={() => setSleep("average")}
              className={`p-4 rounded-xl border-2 ${
                sleep === "average" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              🙂 <p className="font-medium">Average</p>
            </button>

            <button onClick={() => setSleep("poor")}
              className={`p-4 rounded-xl border-2 ${
                sleep === "poor" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              😵 <p className="font-medium">Poor</p>
            </button>

          </div>
        </div>

        {/* Water Intake */}
        <div>
          <p className="text-xl font-semibold mb-3">Water intake today</p>
          <div className="grid grid-cols-3 gap-4">

            <button onClick={() => setWater("low")}
              className={`p-4 rounded-xl border-2 ${
                water === "low" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              💧 <p className="font-medium">1–2 glasses</p>
            </button>

            <button onClick={() => setWater("medium")}
              className={`p-4 rounded-xl border-2 ${
                water === "medium" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              💧💧 <p className="font-medium">3–5 glasses</p>
            </button>

            <button onClick={() => setWater("high")}
              className={`p-4 rounded-xl border-2 ${
                water === "high" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              💧💧💧 <p className="font-medium">6+ glasses</p>
            </button>

          </div>
        </div>

        {/* Activity Section */}
        <div>
          <p className="text-xl font-semibold mb-3">Activity Level</p>
          <div className="grid grid-cols-3 gap-4">

            <button onClick={() => setActivity("walk")}
              className={`p-4 rounded-xl border-2 ${
                activity === "walk" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              🚶 <p className="font-medium">Walked</p>
            </button>

            <button onClick={() => setActivity("exercise")}
              className={`p-4 rounded-xl border-2 ${
                activity === "exercise" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              🏋️ <p className="font-medium">Light Exercise</p>
            </button>

            <button onClick={() => setActivity("none")}
              className={`p-4 rounded-xl border-2 ${
                activity === "none" ? "border-teal-600 bg-teal-50" : "border-gray-200"
              }`}
            >
              ❌ <p className="font-medium">No Activity</p>
            </button>

          </div>

        </div>

        {/* Submit Button */}
        <button className="w-full py-3 bg-teal-700 text-white font-semibold text-lg rounded-xl">
          SUBMIT CHECK-IN
        </button>

        <p className="text-center text-teal-600 underline cursor-pointer">
          View Past Check-ins
        </p>
      </div>
    </div>
  );
}
