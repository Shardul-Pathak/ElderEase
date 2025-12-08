// client/src/components/MoodInput.jsx

import React, { useState } from 'react';

const moodOptions = [
    { value: 'happy', emoji: '😊', sentence: 'I felt really happy today!' },
    { value: 'okay', emoji: '😐', sentence: 'I feel okay/neutral.' },
    { value: 'tired', emoji: '😴', sentence: 'I am feeling tired.' },
    { value: 'painful', emoji: '😫', sentence: 'I am in pain.' },
];

export default function MoodInput({ onMoodSelect }) {
    const [selectedMood, setSelectedMood] = useState(null);

    const handleMoodClick = (mood) => {
        setSelectedMood(mood.value);
        onMoodSelect(mood);
    };

    return (
        <div className="w-full flex justify-center">
            <div
                className="
                bg-teal-50 p-6 rounded-2xl shadow-xl 
                border border-teal-200 max-w-md w-full
            "
            >
                <h4 className="text-xl font-extrabold text-teal-800 mb-5 text-center">
                    How are you feeling today?
                </h4>

                <div className="flex flex-wrap gap-4 justify-center">
                    {moodOptions.map((mood) => (
                        <button
                            key={mood.value}
                            onClick={() => handleMoodClick(mood)}
                            className={`
                                flex items-center space-x-2 py-2 px-4 border-2 rounded-full 
                                transition duration-150 text-base font-semibold
                                ${
                                    selectedMood === mood.value
                                        ? 'bg-teal-600 text-white border-teal-600 shadow-md'
                                        : 'bg-white text-teal-700 border-teal-300 hover:border-teal-500 hover:bg-teal-100'
                                }
                            `}
                        >
                            <span className="text-xl">{mood.emoji}</span>
                            <span>{mood.value.toUpperCase()}</span>
                        </button>
                    ))}
                </div>

                {selectedMood && (
                    <p className="mt-6 text-center text-teal-700 text-sm">
                        Logged:
                        <span className="font-semibold text-teal-900 ml-1">
                            {moodOptions.find((m) => m.value === selectedMood).sentence}
                        </span>
                    </p>
                )}
            </div>
        </div>
    );
}
