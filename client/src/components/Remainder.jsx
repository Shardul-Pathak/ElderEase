// client/src/components/ReminderCard.jsx

import React from 'react';

// --- Placeholder Data Structure (Simulates Reminder Data) ---
const mockReminder = {
    id: 101,
    time: '9:00 AM',
    title: 'Morning Medications',
    status: 'Pending', // Test with 'Completed', 'Missed', or 'Pending'
    description: 'Take all pills with a full glass of water.',
};

export default function ReminderCard() {
    const { time, title, status, description } = mockReminder;

    // --- Conditional Styling Logic for Alarm Status ---
    let statusClasses = '';
    let accentIcon = '🔔';
    
    // 1. Determine the color and icon based on the status field
    if (status === 'Completed') {
        statusClasses = 'bg-green-100 text-green-800 border-green-500';
        accentIcon = '✅';
    } else if (status === 'Missed') {
        statusClasses = 'bg-red-100 text-red-800 border-red-500';
        accentIcon = '❌';
    } else { // Pending (The "alarm is set" state)
        statusClasses = 'bg-yellow-100 text-yellow-800 border-yellow-500';
        accentIcon = '🕒';
    }
    
    // Extract the primary border color class (e.g., 'border-green-500') 
    const borderColorClass = statusClasses.split(' ')[2]; 

    return (
        <div className={`
            bg-white p-5 md:p-6 shadow-md rounded-xl overflow-hidden
            border-l-8 ${borderColorClass} /* Prominent color stripe based on status */
            transition duration-300 hover:shadow-lg
            w-full max-w-lg mx-auto
        `}>
            {/* Header: Time, Icon, and Status Tag */}
            <div className="flex justify-between items-center mb-4 border-b pb-3">
                
                {/* Time Display with Status Icon */}
                <div className="flex items-center space-x-3">
                    <span className="text-3xl">{accentIcon}</span>
                    <span className="text-3xl font-extrabold text-gray-900">
                        {time}
                    </span>
                </div>
                
                {/* Status Tag (The pill shape) */}
                <span className={`
                    px-4 py-1 text-sm font-bold uppercase rounded-full border-2 
                    ${statusClasses} /* Apply the background and text color classes */
                `}>
                    {status}
                </span>
            </div>

            {/* Title and Description */}
            <h3 className="text-xl font-bold text-gray-800 mb-2">
                {title}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
                {description}
            </p>

            {/* Action Button: Mark as Complete for Pending tasks */}
            <div className="text-right">
                {status === 'Pending' && (
                    <button className="
                        bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg
                        hover:bg-teal-700 transition duration-150
                    ">
                        Mark as Taken / Complete
                    </button>
                )}
                {status !== 'Pending' && (
                    <button className="text-gray-500 font-semibold text-sm hover:text-gray-700 transition">
                        View History
                    </button>
                )}
            </div>
        </div>
    );
}