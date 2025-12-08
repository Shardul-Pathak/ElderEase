// client/src/components/ReminderCard.jsx

import React from 'react';

// Define the new teal shade for Pending status (using a soft teal palette)
const PENDING_CLASSES = 'bg-teal-50 text-teal-800 border-teal-500';

// --- Placeholder Data Structure (Simulates Data from Backend) ---
const mockReminder = {
    id: 101,
    time: '9:00 AM',
    title: 'Morning Medications',
    status: 'Pending', 
    description: 'Take all pills with a full glass of water.',
};

export default function ReminderCard({ reminder = mockReminder }) { 
    const { time, title, status, description } = reminder;

    // --- Conditional Styling Logic ---
    let statusClasses = '';
    let accentIcon = '🕒';
    
    if (status === 'Completed') {
        // Green for Success
        statusClasses = 'bg-green-100 text-green-800 border-green-500';
        accentIcon = '✅';
    } else if (status === 'Missed') {
        // Red for Failure/Warning
        statusClasses = 'bg-red-100 text-red-800 border-red-500';
        accentIcon = '❌';
    } else { 
        // Pending - Now uses the softer Teal shade
        statusClasses = PENDING_CLASSES;
        accentIcon = '🕒';
    }
    
    // Extract the primary border color class (e.g., 'border-green-500') 
    const borderColorClass = statusClasses.split(' ')[2]; 

    return (
        <div className={`
            bg-white p-5 md:p-6 shadow-lg rounded-xl overflow-hidden
            border-l-8 ${borderColorClass} /* Prominent color stripe based on status */
            transition duration-300 hover:shadow-2xl
            w-full /* Removed max-w-lg for better grid integration */
            mx-auto
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
                
                {/* Status Tag */}
                <span className={`
                    px-4 py-1 text-sm font-bold uppercase rounded-full border-2 
                    ${statusClasses}
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

            {/* Action Button */}
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