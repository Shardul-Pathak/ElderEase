// client/src/components/QuoteCard.jsx

import React from 'react';

const mockQuote = {
    quote: "ElderEase has given me much peace of mind. It's easy use and helpful!",
    source: '- Mary S., 78',
    icon: '💬', // Speech bubble icon
};

export default function QuoteCard({ quoteData = mockQuote }) {
    const { quote, source, icon } = quoteData;

    return (
        <div className="bg-white p-6 rounded-xl shadow-md flex flex-col h-full border border-gray-100">
            
            {/* Icon */}
            <div className="text-3xl text-teal-500 mb-4">
                {icon}
            </div>
            
            {/* Quote */}
            <p className="text-gray-700 italic mb-4 flex-grow">
                "{quote}"
            </p>
            
            {/* Source */}
            <p className="text-sm font-semibold text-gray-600">
                {source}
            </p>
        </div>
    );
}