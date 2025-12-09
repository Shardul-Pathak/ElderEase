// client/src/components/ReminderForm.jsx

import React, { useState } from 'react';

const frequencyOptions = ['Daily', 'Weekly', 'One-Time'];

export default function ReminderForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        time: '',
        frequency: 'Daily',
        title: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // This is where the data would be sent to Shardul's backend.
        onSubmit(formData); 
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-2xl rounded-xl space-y-5 border-t-4 border-teal-600 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">Schedule New Reminder</h2>

            {/* Title, Time, and Frequency are placed in a responsive grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Time Input */}
                <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <input
                        type="time"
                        name="time"
                        id="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>

                {/* 2. Frequency Input */}
                <div>
                    <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">Frequency</label>
                    <select
                        name="frequency"
                        id="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500 bg-white"
                    >
                        {frequencyOptions.map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 3. Reminder Title Input (Stretches full width) */}
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Reminder Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Take Morning Meds"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-150"
            >
                Schedule Reminder
            </button>
        </form>
    );
}