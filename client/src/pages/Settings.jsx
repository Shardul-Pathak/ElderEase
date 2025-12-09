import React, { useState } from "react";

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [tts, setTts] = useState(true);
  const [fontSize, setFontSize] = useState("medium");

  return (
    <div className="min-h-screen bg-[#f0f7f7] flex justify-center px-4 py-10">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl p-8 space-y-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-teal-700 text-center">
          Settings
        </h1>

        {/* Profile */}
        <div className="bg-teal-50 p-5 rounded-xl border border-teal-200">
          <h2 className="text-xl font-semibold text-teal-800 mb-3">
            Profile
          </h2>

          <div className="space-y-2 text-gray-700">
            <p><span className="font-semibold">Name:</span> John Doe</p>
            <p><span className="font-semibold">Age:</span> 72 years</p>
            <button className="mt-3 px-4 py-2 bg-teal-700 text-white rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Font Size */}
        <div className="bg-[#f7faf7] p-5 rounded-xl border">
          <h2 className="text-xl font-semibold text-teal-800 mb-4">Text Size</h2>
          <div className="grid grid-cols-3 gap-4">
            {["small", "medium", "large"].map((size) => (
              <button
                key={size}
                onClick={() => setFontSize(size)}
                className={`p-3 rounded-xl border-2 text-center ${
                  fontSize === size
                    ? "bg-teal-600 text-white border-teal-600"
                    : "border-gray-300 text-gray-700"
                }`}
              >
                {size.charAt(0).toUpperCase() + size.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="space-y-6">

          {/* Dark Mode */}
          <div className="flex justify-between items-center bg-[#f7f7f7] p-4 rounded-xl border">
            <p className="text-lg font-medium">Dark Mode</p>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`w-14 h-7 flex items-center rounded-full ${
                darkMode ? "bg-teal-700" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow transform ${
                  darkMode ? "translate-x-7" : "translate-x-1"
                }`}
              ></div>
            </button>
          </div>

          {/* Text-to-Speech */}
          <div className="flex justify-between items-center bg-[#f7f7f7] p-4 rounded-xl border">
            <p className="text-lg font-medium">Text-to-Speech</p>
            <button
              onClick={() => setTts(!tts)}
              className={`w-14 h-7 flex items-center rounded-full ${
                tts ? "bg-teal-700" : "bg-gray-300"
              }`}
            >
              <div
                className={`w-6 h-6 bg-white rounded-full shadow transform ${
                  tts ? "translate-x-7" : "translate-x-1"
                }`}
              ></div>
            </button>
          </div>

        </div>

        {/* Logout */}
        <button className="w-full py-3 bg-red-600 text-white rounded-xl font-semibold mt-6">
          Log Out
        </button>

      </div>
    </div>
  );
}
