import { useState, useEffect } from 'react';
import NotAuthorized from '../components/NotAuthorized';
import ReminderFormCT from '../components/ReminderFormCT';
import ReminderCard from '../components/ReminderCard'; 
import getReminders from '../services/getRemindersCT';
import getNames from '../services/getNames'; 

export default function CaretakerReminders({isLoggedIn}) {
    const [TAB_OPTIONS, setTabOptions] = useState([{ id: 'all', name: 'All Users' }])
    const [activeTab, setActiveTab] = useState('all');
    const [filter, setFilter] = useState('All');
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [remindersList, setRemindersList] = useState([]);

    useEffect(() => {
        const fetchReminders = async () => {
            const data = await getReminders();
            const names = await getNames();
            setTabOptions((prev) => {
                return [...prev, names]
            })
            setRemindersList(data);
        };
        fetchReminders();
    },[])

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

    const filteredReminders = remindersList
        .filter(reminder => activeTab === 'all' || reminder.user === activeTab)
        .filter(reminder => filter === 'All' || reminder.status === filter);

    if (!isLoggedIn) {
        return (
            <NotAuthorized />
        );
    }
    
    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen bg-gray-50">
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

            {isAddingNew && (
                <div className="mb-10 max-w-lg mx-auto">
                    <ReminderFormCT onSubmit={handleFormSubmit} /> 
                </div>
            )}

            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
                    {TAB_OPTIONS.find(t => t.id === activeTab).name}'s Tasks ({filteredReminders.length})
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReminders.map(reminder => (
                        <ReminderCard key={reminder.id} reminder={reminder} /> 
                    ))}
                </div>

                {filteredReminders.length === 0 && (
                    <p className="text-gray-500 p-8 text-center border rounded-lg bg-white">
                        No {filter.toLowerCase()} reminders found for this user.
                    </p>
                )}
            </section>
        </div>
    );
}