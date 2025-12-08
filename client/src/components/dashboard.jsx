import React from "react";

export default function Dashboard() {
  return (
    <div className="bg-[#f5f8fa] min-h-screen py-10 px-5 font-sans text-gray-800">

      {/* Greeting */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-[#0a7a7a] mb-1">
          Hello, abc!
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          How can I help you today?
        </p>
      </div>

      {/* Card Container */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* Reminders */}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-6">
          <div className="text-gray-700 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-1">Reminders</h3>
          <p className="text-gray-600">Medicines, Appointments, and more</p>
        </div>

        {/* Daily Check-ins */}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-6">
          <div className="text-gray-700 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            >
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-1">Daily Check-ins</h3>
          <p className="text-gray-600">Monitor wellbeing & daily routine</p>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-6">
          <div className="text-gray-700 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            >
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-1">Emergency Contacts</h3>
          <p className="text-gray-600">Manage Your Contact</p>
        </div>

        {/* SOS */}
        <div className="bg-white border border-gray-300 rounded-2xl shadow-md p-6">
          <div className="text-gray-700 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
            </svg>
          </div>

          <h3 className="text-xl font-semibold mb-1">Need Help</h3>
          
          <div className="flex justify-between items-center mt-3">
            <p className="text-gray-600">Press the SOS Button</p>

            <button className="w-12 h-12 bg-red-600 text-white font-bold rounded-full shadow-lg hover:bg-red-700 flex items-center justify-center">
              SOS
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
