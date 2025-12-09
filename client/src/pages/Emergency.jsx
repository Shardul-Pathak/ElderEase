// client/src/pages/EmergencyContacts.jsx (Correction Applied)

import React, { useState } from 'react';
import ContactCard from '../components/ContactCard'; 
import ContactForm from '../components/ContactForm'; 

export default function EmergencyContacts() {
    const [isAddingNew, setIsAddingNew] = useState(false);
    
    // Updated Placeholder state for all emergency contacts:
    const [contactsList, setContactsList] = useState([
        { id: 1, name: 'Dr. Amelia Chen', role: 'Primary Care Physician', phone: '555-123-4567', canMessage: true }, // Removed canCall: true
        { id: 2, name: 'Sarah Johnson', role: 'Daughter/Caregiver', phone: '555-987-6543', canMessage: true },      // Removed canCall: true
        { id: 3, name: 'Nurse David Kim', role: 'Home Health Nurse', phone: '555-333-2222', canMessage: true },       // Removed canCall: false/true
    ]);
    // ... (rest of the component logic remains the same)
    
    // Handler for the SOS button
    const handleSOSPress = () => {
        alert('🚨 SOS triggered! Sending urgent notifications to all contacts...');
    };

    const handleFormSubmit = (newContactData) => {
        // Temporarily add the new contact to the local list
        const newContact = {
            ...newContactData,
            id: Date.now(), 
            canMessage: true, // Defaulting message permission
        };
        setContactsList(prevList => [...prevList, newContact]);
        setIsAddingNew(false); 
    };

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen bg-gray-50">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-8 text-center md:text-left">
                🚨 EMERGENCY CONTACTS
            </h1>
            
            {/* --- 1. SOS Button Section --- */}
            <div className="flex justify-center mb-10">
                <div className="bg-orange-50 p-6 rounded-xl shadow-lg border-t-4 border-red-500 text-center max-w-sm">
                    <button 
                        onClick={handleSOSPress}
                        className="bg-red-600 text-white w-24 h-24 rounded-full font-black text-2xl shadow-xl hover:bg-red-700 transition duration-150 transform hover:scale-105"
                        aria-label="Emergency SOS Button"
                    >
                        SOS
                    </button>
                    <p className="mt-4 text-lg font-bold text-gray-800">Need Help?</p>
                    <p className="text-sm text-gray-500">Press the SOS button for immediate assistance.</p>
                </div>
            </div>

            {/* --- 2. Add New Contact Button --- */}
            <div className="mb-8 flex justify-center">
                <button
                    onClick={() => setIsAddingNew(!isAddingNew)}
                    className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition duration-150 shadow-md text-lg"
                >
                    {isAddingNew ? 'Close Form' : '+ ADD NEW CONTACT'}
                </button>
            </div>

            {/* --- 3. Conditional Form View --- */}
            {isAddingNew && (
                <div className="mb-10">
                    <ContactForm onSubmit={handleFormSubmit} />
                </div>
            )}
            
            {/* --- 4. Contact List View --- */}
            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Your Trusted Contacts</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactsList.map(contact => (
                        <ContactCard key={contact.id} contact={contact} /> 
                    ))}
                </div>
            </section>
        </div>
    );
}