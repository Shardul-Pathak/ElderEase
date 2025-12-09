// client/src/components/ContactForm.jsx

import React, { useState } from 'react';

export default function ContactForm({ onSubmit }) {
    // State to track the values of the form inputs
    const [formData, setFormData] = useState({
        name: '',
        relationship: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In the real app, this data is sent to Shardul's backend.
        onSubmit(formData); 
        // Optional: Clear form after submission
        setFormData({ name: '', relationship: '', phone: '' }); 
    };

    return (
        <form onSubmit={handleSubmit} className="p-6 bg-white shadow-2xl rounded-xl space-y-5 border-t-4 border-teal-600 w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">Add New Emergency Contact</h2>

            {/* 1. Full Name Input */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g., Sarah Johnson"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
            </div>

            {/* 2. Relationship and Phone Number in a Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Relationship Input */}
                <div>
                    <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
                    <input
                        type="text" 
                        name="relationship"
                        id="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Daughter, Doctor"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>

                {/* Phone Number Input */}
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel" // Use 'tel' for better mobile keyboard experience
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="e.g., 555-123-4567"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>
            </div>
            
            {/* Submit Button (Teal Aesthetic) */}
            <button
                type="submit"
                className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-150"
            >
                Add Contact
            </button>
        </form>
    );
}