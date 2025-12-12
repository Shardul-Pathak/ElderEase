import { useState } from 'react';
import updateReminder from '../services/updateReminder';

const PENDING_CLASSES = 'bg-teal-50 text-teal-800 border-teal-500';

export default function ReminderCard(props) { 
    const [reminder, setReminder] = useState(props.reminder);
    const date = new Date(reminder.time);
    const formattedTime = date.toLocaleString("en-IN", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    let statusClasses = '';
    let accentIcon = '🕒';

    const handleComplete = async () => {
        await updateReminder(reminder._id);
    }
    
    if (reminder.status === 'Completed') {
        statusClasses = 'bg-green-100 text-green-800 border-green-500';
        accentIcon = '✅';
    } else if (reminder.status === 'Missed') {
        statusClasses = 'bg-red-100 text-red-800 border-red-500';
        accentIcon = '❌';
    } else { 
        statusClasses = PENDING_CLASSES;
        accentIcon = '🕒';
    }

    const borderColorClass = statusClasses.split(' ')[2]; 

    return (
        <div className={`
            bg-white p-5 md:p-6 shadow-lg rounded-xl overflow-hidden
            border-l-8 ${borderColorClass} /* Prominent color stripe based on status */
            transition duration-300 hover:shadow-2xl
            w-full /* Removed max-w-lg for better grid integration */
            mx-auto
        `}>
            <div className="flex justify-between items-center mb-4 border-b pb-3">
                <div className="flex items-center space-x-3">
                    <span className="text-2xl">{accentIcon}</span>
                    <span className="text-2xl font-extrabold text-gray-900">
                        {formattedTime}
                    </span>
                </div>

                <span className={`
                    px-4 py-1 text-sm font-bold uppercase rounded-full border-2 
                    ${statusClasses}
                `}>
                    {reminder.status}
                </span>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">
                {reminder.title}
            </h3>

            <p className="text-sm text-gray-500 mb-4">
                {reminder.description}
            </p>

            <div className="text-right">
                {reminder.status === 'Pending' && (
                    <button onClick={handleComplete} className="
                        bg-teal-600 text-white font-semibold py-2 px-4 rounded-lg
                        hover:bg-teal-700 transition duration-150
                    ">
                        Mark as Taken / Complete
                    </button>
                )}
                {reminder.status !== 'Pending' && (
                    <button className="text-gray-500 font-semibold text-sm hover:text-gray-700 transition">
                        View History
                    </button>
                )}
            </div>
        </div>
    );
}