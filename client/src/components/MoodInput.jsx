// client/src/components/MoodInput.jsx

import React, { useState } from 'react';

// Defines the options the user can click and the data that will be saved
const moodOptions = [
    { value: 'happy', emoji: '😊', sentence: 'I felt really happy today!' },
    { value: 'okay', emoji: '😐', sentence: 'I feel okay/neutral.' },
    { value: 'tired', emoji: '😴', sentence: 'I am feeling tired.' },
    { value: 'painful', emoji: '😫', sentence: 'I am in pain.' },
];

export default function MoodInput({ onMoodSelect }) {
    // Keeps track of which button is currently selected for highlighting
    const [selectedMood, setSelectedMood] = useState(null);

    const handleMoodClick = (mood) => {
        // 1. Highlight the button the user just clicked
        setSelectedMood(mood.value);
        
        // 2. Tell the parent page (CheckIn.jsx) what was selected
        onMoodSelect(mood); 
    };

    return (
        <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
            <h4 className="text-lg font-bold text-gray-700 mb-3">How are you feeling today?</h4>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {/* Loop through the moodOptions array to create a button for each mood */}
                {moodOptions.map((mood) => (
                    <button
                        key={mood.value}
                        onClick={() => handleMoodClick(mood)}
                        className={`
                            flex items-center space-x-2 p-3 border-2 rounded-full 
                            transition duration-150 text-base font-semibold
                            /* Conditional styling: if selected, use teal background; otherwise, use white */
                            ${selectedMood === mood.value 
                                ? 'bg-teal-600 text-white border-teal-600 shadow-md' 
                                : 'bg-white text-gray-700 border-gray-300 hover:border-teal-400'
                            }
                        `}
                    >
                        <span className="text-xl">{mood.emoji}</span>
                        {/* Display the key word (e.g., HAPPY) */}
                        <span>{mood.value.toUpperCase()}</span> 
                    </button>
                ))}
            </div>
            
            {/* Confirmation message for the user */}
            {selectedMood && (
                <p className="mt-4 text-center text-gray-600">
                    Logged: <span className="font-semibold text-teal-600 ml-1">
                    {moodOptions.find(m => m.value === selectedMood).sentence}
                    </span>
                </p>
            )}
        </div>
    );
}