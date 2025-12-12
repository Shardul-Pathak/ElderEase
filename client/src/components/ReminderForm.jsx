import { useState } from 'react';

const frequencyOptions = ['Daily', 'Weekly', 'One-Time'];

export default function ReminderForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        time: '',
        frequency: 'Daily',
        title: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(e);
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-2xl rounded-xl space-y-5 border-t-4 border-teal-600 w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">Schedule New Reminder</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                    <input
                        type="datetime-local"
                        name="time"
                        id="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>

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

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Reminder Description</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Take the Green pill before Breakfast"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-150"
            >
                Schedule Reminder
            </button>
        </form>
    );
}