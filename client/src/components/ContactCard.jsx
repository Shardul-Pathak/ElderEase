// client/src/components/ContactCard.jsx

import React from 'react';

// Using mock data that matches the required structure (Name, Role, Phone)
const mockContact = {
    id: 1,
    name: 'Dr. Amelia Chen',
    role: 'Primary Care Physician',
    phone: '555-123-4567', 
    canMessage: true,
    canCall: true,
};

export default function ContactCard({ contact = mockContact }) {
    const { name, role, phone, canMessage, canCall } = contact;

    // Functions to simulate the in-app notification trigger
    const handleNotify = (action) => {
        // This is where you would call Shardul's API to send an internal alert
        console.log(`ACTION: Triggered in-app ${action} notification for ${name}`);
        alert(`An in-app notification request has been sent to ${name} for a ${action}!`);
    };

    return (
        <div className="bg-white p-3 shadow-md rounded-lg transition duration-200 hover:shadow-lg w-full">
            
            {/* Tighter Main Content Area: Use items-center for precise vertical alignment */}
            <div className="flex justify-between items-center space-x-3">
                
                {/* 1. Left Side: Icon and Text Details */}
                <div className="flex items-center space-x-3 flex-grow min-w-0">
                    
                    {/* Profile Icon Placeholder (matching the gray circle in the image) */}
                    <div className="flex-shrink-0 p-2 bg-gray-100 rounded-full">
                        {/* Smaller icon size */}
                        <span className="text-base text-gray-600">👤</span>
                    </div>
                    
                    {/* Name and Role (Tighter spacing) */}
                    <div className="min-w-0 py-1"> {/* Added py-1 for precise vertical centering */}
                        <p className="text-sm font-bold text-gray-800 truncate">{name}</p>
                        <p className="text-xs text-gray-500 truncate">{role}</p>
                    </div>
                </div>
                
                {/* 2. Right Side: Action Buttons (Teal Circles) */}
                <div className="flex-shrink-0 flex space-x-2">
                    
                    {/* Message/Notify Button */}
                    {canMessage && (
                        <button 
                            onClick={() => handleNotify('message')}
                            aria-label={`Send in-app message to ${name}`}
                            className="p-2 bg-teal-600 rounded-full text-white hover:bg-teal-700 transition"
                        >
                            <span className="text-sm">💬</span>
                        </button>
                    )}
                    
                    {/* Urgent Notify Button */}
                    {canCall && (
                        <button 
                            onClick={() => handleNotify('urgent call')}
                            aria-label={`Send urgent in-app notification to ${name}`}
                            className="p-2 bg-teal-600 rounded-full text-white hover:bg-teal-700 transition"
                        >
                            {/* Using phone icon to match the visual in the image, but trigger is in-app */}
                            <span className="text-sm">📞</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}