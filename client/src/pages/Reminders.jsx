// client/src/pages/Reminders.jsx

import React, { useState } from 'react';
// Import the two components we just finalized
import ReminderForm from '../components/ReminderForm'; 
import ReminderCard from '../components/ReminderCard'; 

export default function Reminders() {
    // 1. State to control showing the form (true = show form, false = show list)
    const [isAddingNew, setIsAddingNew] = useState(false);
    
    // 2. Placeholder state for all reminders (Simulates data from Shardul's backend)
    const [remindersList, setRemindersList] = useState([
        // Ensure the statuses vary to test your ReminderCard colors!
        { id: 1, time: '9:00 AM', title: 'Morning Medications', status: 'Pending', description: 'Take all pills with a full glass of water.' },
        { id: 2, time: '1:00 PM', title: 'Check Blood Sugar', status: 'Completed', description: 'Log reading in journal.' },
        { id: 3, time: '5:30 PM', title: 'Evening Therapy Exercises', status: 'Missed', description: 'Do simple leg stretches.' },
        { id: 4, time: '7:00 PM', title: 'Vitamins', status: 'Pending', description: 'Take B-12 and Vitamin D.' },
    ]);

    // Function to handle data when the ReminderForm is submitted
    const handleFormSubmit = (newReminderData) => {
        // In a real app, you would send this to Shardul's API.
        console.log("New Reminder Scheduled:", newReminderData); 
        
        // Temporarily add the new reminder to the local list for display
        const newReminder = {
            ...newReminderData,
            id: Date.now(), // Use a unique ID
            description: 'New task added.',
            status: 'Pending', // New tasks always start as Pending
        };

        setRemindersList(prevList => [...prevList, newReminder]);
        
        // Hide the form and return to the list view
        setIsAddingNew(false); 
    };

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen bg-gray-50">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-8">🔔 Your Reminders</h1>

            {/* --- 1. Add New Reminder Button --- */}
            <div className="mb-8">
                <button
                    onClick={() => setIsAddingNew(!isAddingNew)}
                    className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition duration-150 shadow-md text-lg"
                >
                    {isAddingNew ? 'Close Form' : '+ ADD NEW REMINDER'}
                </button>
            </div>

            {/* --- 2. Conditional Form View --- */}
            {isAddingNew && (
                <div className="mb-10">
                    <ReminderForm onSubmit={handleFormSubmit} />
                </div>
            )}
            
            {/* --- 3. Reminder List View --- */}
            {!isAddingNew && (
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">All Scheduled Tasks</h2>
                    
                    {/* The Responsive Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Loop through the data and display a Card for each reminder */}
                        {remindersList.map(reminder => (
                            <ReminderCard key={reminder.id} reminder={reminder} /> 
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}