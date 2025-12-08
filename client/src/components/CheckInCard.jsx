// client/src/components/CheckInCard.jsx

import React from 'react';

// --- Placeholder Data Structure ---
const mockCheckInLog = {
    date: 'Monday, December 7th',
    moodSentence: 'I felt really happy today!', // The sentence that MoodInput generated
    moodEmoji: '😊',
    medicinesTaken: true,
    customLog: [
        { 
            question: 'Knee Pain Level', 
            answer: 'Moderate (4-7)', 
            tagColor: 'bg-orange-100 text-orange-800' // Color based on severity level
        },
        { 
            question: 'Dizziness or Vertigo?', 
            answer: 'No', 
            tagColor: 'bg-green-100 text-green-800' 
        },
    ],
};

export default function CheckInCard() {
    const { date, moodSentence, moodEmoji, medicinesTaken, customLog } = mockCheckInLog;
    
    // Creates the friendly greeting (e.g., "How was Monday?")
    const greeting = `How was ${date.split(',')[0]}?`;

    return (
        <div className="bg-white p-6 shadow-xl rounded-xl border border-gray-100 transition duration-300 hover:shadow-2xl w-full max-w-xl mx-auto">
            
            {/* 1. Conversational Header */}
            <h3 className="text-xl font-serif italic text-gray-500 mb-2">
                {greeting}
            </h3>

            {/* 2. Mood Display */}
            <div className="flex items-center space-x-3 mb-5 border-b pb-4">
                <p className="text-2xl font-bold text-gray-800">
                    {moodSentence}
                </p>
                <span className="text-3xl">{moodEmoji}</span>
            </div>

            {/* 3. Medicine Status */}
            <div className="mb-4 grid grid-cols-2 gap-4 items-center">
                <p className="font-medium text-gray-700">Medicines Taken?</p>
                <div className="text-right">
                    <span className={`
                        inline-block px-3 py-1 text-sm font-semibold rounded-full
                        ${medicinesTaken ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
                    `}>
                        {medicinesTaken ? 'YES' : 'NO'}
                    </span>
                </div>
            </div>
            
            <hr className="my-4"/>

            {/* 4. Custom Symptoms Log (Dynamic Loop) */}
            <h4 className="text-lg font-bold text-teal-600 mb-3">Health Log Details</h4>
            
            <div className="space-y-3">
                {/* LOOPS through the questions/answers array */}
                {customLog.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 gap-4 items-center border-b border-gray-100 pb-2">
                        {/* LEFT COLUMN: Question text */}
                        <p className="text-sm font-medium text-gray-600">{item.question}</p>
                        
                        {/* RIGHT COLUMN: The Answer Tag (with color from data) */}
                        <div className="text-right">
                            <span className={`
                                inline-block px-3 py-1 text-xs rounded-full 
                                ${item.tagColor || 'bg-gray-200 text-gray-700'}
                            `}>
                                {item.answer}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}