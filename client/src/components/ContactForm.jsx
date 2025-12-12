import addContact from '../services/addContact';

export default function ContactForm({ setIsAddingNew, setContactsList }) {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const allContacts = await addContact(e, setContactsList)
        setContactsList(allContacts);
        setIsAddingNew(false); 
    };

    return (
        <form onSubmit={handleFormSubmit} className="p-6 bg-white shadow-2xl rounded-xl space-y-5 border-t-4 border-teal-600 w-full max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-gray-800">Add New Emergency Contact</h2>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="e.g., Sarah Johnson"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">Relationship</label>
                    <input
                        type="text" 
                        name="relationship"
                        id="relationship"
                        required
                        placeholder="e.g., Daughter, Doctor"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder="e.g., 555-123-4567"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-150"
            >
                Add Contact
            </button>
        </form>
    );
}