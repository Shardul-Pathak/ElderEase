import { useEffect, useState } from 'react';
import NotAuthorized from '../components/NotAuthorized';
import ReminderForm from '../components/ReminderForm'; 
import ReminderCard from '../components/ReminderCard'; 
import addReminder from '../services/addReminder';
import getReminders from '../services/getReminders';

export default function Reminders({isLoggedIn}) {
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [remindersList, setRemindersList] = useState([]);

    useEffect(() => {
        const fetchReminders = async () => {
            const data = await getReminders();
            setRemindersList(data);
        };
        fetchReminders();
    },[])

    const handleFormSubmit = async (e) => {
        const data = await addReminder(e);
        setRemindersList(data);
        setIsAddingNew(false); 
    };

    if (!isLoggedIn) {
         return (
            <NotAuthorized />
        );
    }

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen bg-gray-50">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-8">🔔 Your Reminders</h1>
            <div className="mb-8 space-x-8">
                <a href='/home'>
                    <button
                        className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition duration-150 shadow-md text-lg"
                    >
                        Go Back
                    </button>
                </a>
                <button
                    onClick={() => setIsAddingNew(!isAddingNew)}
                    className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition duration-150 shadow-md text-lg"
                >
                    {isAddingNew ? 'Close Form' : '+ ADD NEW REMINDER'}
                </button>
            </div>

            {isAddingNew && (
                <div className="mb-10">
                    <ReminderForm onSubmit={handleFormSubmit} />
                </div>
            )}

            {!isAddingNew && (
                <section>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">All Scheduled Tasks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {remindersList.map(reminder => (
                            <ReminderCard key={reminder._id} reminder={reminder} /> 
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}