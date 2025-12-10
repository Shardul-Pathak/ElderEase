import React from "react";

export default function CheckHistory7Days() {
  // Today’s date
  const today = new Date();

  // Dummy check-in data (you will replace with your real backend later)
  const historyData = [
    { id: 1, date: "Monday, December 9, 2025", mood: "Great", medTaken: true, icon: "😊" },
    { id: 2, date: "Sunday, December 8, 2025", mood: "Okay", medTaken: false, icon: "😐" },
    { id: 3, date: "Saturday, December 7, 2025", mood: "Not Good", medTaken: true, icon: "😟" },
    { id: 4, date: "Friday, December 6, 2025", mood: "Great", medTaken: true, icon: "😊" },
    { id: 5, date: "Thursday, December 5, 2025", mood: "Okay", medTaken: true, icon: "😐" },
    { id: 6, date: "Wednesday, December 4, 2025", mood: "Great", medTaken: true, icon: "😊" },
    { id: 7, date: "Tuesday, December 3, 2025", mood: "Okay", medTaken: false, icon: "😐" },
    { id: 8, date: "Monday, November 20, 2025", mood: "Great", medTaken: true, icon: "😊" }, // Older than 7 days
  ];

  // Convert readable date → actual JS date
  const parseDate = (str) => new Date(str);

  // Filter last 7 days
  const last7Days = historyData.filter((item) => {
    const diff = (today - parseDate(item.date)) / (1000 * 60 * 60 * 24);
    return diff <= 7; // only last 7 days
  });

  return (
    <div className="min-h-screen bg-[#f0f7f7] px-4 py-10 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-teal-700 mb-6">
          Check-ins (Last 7 Days)
        </h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {last7Days.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-5 border-l-4 border-teal-600 hover:shadow-lg transition cursor-pointer"
            >
              {/* Mood Icon */}
              <div className="text-4xl">{item.icon}</div>

              {/* Date */}
              <p className="text-xl font-semibold text-teal-800 mt-2">
                {item.date}
              </p>

              {/* Summary */}
              <p className="mt-2 text-gray-700">
                <span className="font-semibold">Mood:</span> {item.mood}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Medicines:</span>{" "}
                {item.medTaken ? "Yes" : "No"}
              </p>

              <p className="text-teal-600 font-medium mt-3">
                Tap to view full details →
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
