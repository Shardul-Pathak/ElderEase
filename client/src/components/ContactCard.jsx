import { Phone } from 'lucide-react'

export default function ContactCard({ contactDetail }) {
    const { name, relation, contact, canMessage, canCall } = contactDetail;
    const handleNotify = (action) => {
        console.log(`ACTION: Triggered in-app ${action} notification for ${name}`);
        alert(`An in-app notification request has been sent to ${name} for a ${action}!`);
    };

    return (
        <div className="bg-white p-3 shadow-md rounded-lg transition duration-200 hover:shadow-lg w-full">
            <div className="flex justify-between items-center space-x-3">
                <div className="flex items-center space-x-3 min-w-0">
                    <div className="p-2 bg-gray-100 rounded-full">
                        <span className="text-base text-gray-600">👤</span>
                    </div>
                    <div className="min-w-0 py-1">
                        <p className="text-sm font-bold text-gray-800 truncate">{name}</p>
                        <p className="text-xs text-gray-500 truncate">{relation}</p>
                    </div>
                </div>
                <div className="flex space-x-2">
                    {canMessage && (
                        <button 
                            onClick={() => handleNotify('message')}
                            aria-label={`Send in-app message to ${name}`}
                            className="p-2 bg-teal-600 rounded-full text-white hover:bg-teal-700 transition"
                        >
                            <span className="text-sm">💬</span>
                        </button>
                    )}

                    {canCall && (
                        <button 
                            onClick={() => handleNotify('urgent call')}
                            aria-label={`Send urgent in-app notification to ${name}`}
                            className="group p-2 bg-teal-600 rounded-full text-white hover:bg-teal-700 transition"
                        >
                            <span className="text-sm group-hover:hidden"><Phone/></span>
                            <span className="text-sm hidden group-hover:block">{contact}</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}