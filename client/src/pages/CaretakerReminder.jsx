// client/src/pages/CaretakerReminders.jsx

import React, { useState } from 'react';
// Correctly importing the new form component
import ReminderFormCT from '../components/ReminderFormCT'; 
// Reusing the display component
import ReminderCard from '../components/ReminderCard'; 

// Mock list of elderly users (must match the list in ReminderFormCT)
const MOCK_USERS = [
    { id: 'user1', name: 'Grandma Betty' },
    { id: 'user2', name: 'Uncle George' },
];
// Tab options include all users plus a "View All" option
const TAB_OPTIONS = [{ id: 'all', name: 'All Users' }, ...MOCK_USERS];


export default function CaretakerReminders() {
    
    // --- State Management ---
    const [activeTab, setActiveTab] = useState('all'); // State for selecting the person/tab
    const [filter, setFilter] = useState('All'); // State for filtering by status (Pending, Missed, etc.)
    const [isAddingNew, setIsAddingNew] = useState(false);
    
    // Placeholder Data (Simulates multi-user data from backend, tagged with user ID)
    const [remindersList, setRemindersList] = useState([
        { id: 1, user: 'user1', time: '9:00 AM', title: 'Morning Meds (Betty)', status: 'Pending', description: 'Take all pills with water.' },
        { id: 2, user: 'user2', time: '1:00 PM', title: 'Check BP (George)', status: 'Completed', description: 'Log reading in journal.' },
        { id: 3, user: 'user1', time: '5:30 PM', title: 'Therapy (Betty)', status: 'Missed', description: 'Do simple leg stretches.' },
        { id: 4, user: 'user2', time: '8:00 AM', title: 'Breakfast (George)', status: 'Pending', description: 'Eat a full meal.' },
    ]);

    const handleFormSubmit = (newReminderData) => {
        const newReminder = {
            ...newReminderData,
            id: Date.now(),
            description: 'Scheduled by Caretaker.',
            status: 'Pending', 
        };

        setRemindersList(prevList => [newReminder, ...prevList]);
        setIsAddingNew(false); 
    };
    
    // --- Filtering Logic (By User AND By Status) ---
    const filteredReminders = remindersList
        .filter(reminder => activeTab === 'all' || reminder.user === activeTab) // Filter by User/Tab
        .filter(reminder => filter === 'All' || reminder.status === filter); // Filter by Status


    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen bg-gray-50">
            <h1 className="text-4xl font-extrabold text-indigo-700 mb-8">
                📋 Caretaker: Manage Reminders
            </h1>

            {/* 1. User Tabs (Filter by Person) */}
            <div className="flex flex-wrap border-b border-gray-200 mb-6 bg-white p-2 rounded-lg shadow-sm">
                {TAB_OPTIONS.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`
                            px-4 py-2 text-sm font-semibold rounded-md m-1 transition duration-150
                            ${activeTab === tab.id 
                                ? 'bg-teal-600 text-white shadow-md' 
                                : 'text-gray-600 hover:bg-gray-100'
                            }
                        `}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>

            {/* 2. Control Panel: Add Button & Status Filter */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 bg-white p-4 rounded-lg shadow-md">
                
                <button
                    onClick={() => setIsAddingNew(!isAddingNew)}
                    className="bg-teal-600 text-white font-bold py-2 px-5 rounded-lg hover:bg-teal-700 transition duration-150 shadow-lg mb-4 md:mb-0"
                >
                    {isAddingNew ? 'Close Form' : '+ SCHEDULE NEW REMINDER'}
                </button>
                
                <div className="flex items-center space-x-3">
                    <label className="text-gray-700 font-medium">Filter Status:</label>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    >
                        <option value="All">All Statuses</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="Missed">Missed</option>
                    </select>
                </div>
            </div>

            {/* 3. Conditional Form View */}
            {isAddingNew && (
                <div className="mb-10 max-w-lg mx-auto">
                    {/* The new component is used here */}
                    <ReminderFormCT onSubmit={handleFormSubmit} /> 
                </div>
            )}
            
            {/* 4. Reminder List View */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                    {TAB_OPTIONS.find(t => t.id === activeTab).name}'s Tasks ({filteredReminders.length})
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReminders.map(reminder => (
                        <ReminderCard key={reminder.id} reminder={reminder} /> 
                    ))}
                </div>
                
                {/* Empty State Message */}
                {filteredReminders.length === 0 && (
                    <p className="text-gray-500 p-8 text-center border rounded-lg bg-white">
                        No {filter.toLowerCase()} reminders found for this user.
                    </p>
                )}
            </section>
        </div>
    );
}