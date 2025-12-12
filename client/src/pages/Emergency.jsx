import { useState, useEffect } from 'react';
import NotAuthorized from '../components/NotAuthorized'
import ContactCard from '../components/ContactCard'; 
import ContactForm from '../components/ContactForm';
import getAllContacts from '../services/getAllContacts';

export default function EmergencyContacts({isLoggedIn}) {
    const [isAddingNew, setIsAddingNew] = useState(false);
    const [contactsList, setContactsList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const allContacts = await getAllContacts();
            setContactsList(allContacts);
        }
        getData();
    }, [isAddingNew])

    const handleSOSPress = () => {
        alert('🚨 SOS triggered! Sending urgent notifications to all contacts...');
    };

    if (!isLoggedIn) {
        return (
            <NotAuthorized />
        );
    }

    return (
        <div className="p-4 md:p-8 max-w-6xl mx-auto min-h-screen bg-gray-50">
            <h1 className="text-4xl font-extrabold text-teal-600 mb-8 text-center md:text-left">
                🚨 EMERGENCY CONTACTS
            </h1>
            <a href='/home'>
                <button className='text-white text-l bg-teal-600 p-2 mb-4 rounded-2xl hover:bg-teal-800'>
                    Go Back
                </button>
            </a>
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

            <div className="mb-8 flex justify-center">
                <button
                    onClick={() => setIsAddingNew(!isAddingNew)}
                    className="bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition duration-150 shadow-md text-lg"
                >
                    {isAddingNew ? 'Close Form' : '+ ADD NEW CONTACT'}
                </button>
            </div>

            {isAddingNew && (
                <div className="mb-10">
                    <ContactForm setIsAddingNew={setIsAddingNew} setContactsList={setContactsList} />
                </div>
            )}

            <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">Your Trusted Contacts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {contactsList.map((contact, idx) => (
                        <ContactCard key={idx} contactDetail={{canMessage: true, canCall: true,...contact}} /> 
                    ))}
                </div>
            </section>
        </div>
    );
}