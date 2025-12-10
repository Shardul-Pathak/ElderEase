// client/src/components/FeatureBlock.jsx

import React from 'react';

const mockFeature = {
    icon: '⏰',
    title: 'Medication & Routine Reminders',
};

export default function FeatureBlock({ feature = mockFeature }) {
    const { icon, title } = feature;

    return (
        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-60 flex flex-col items-center justify-center text-center transition duration-300 hover:shadow-2xl">
            
            {/* Icon - Using the Teal accent color for consistency */}
            <div className="p-4 bg-teal-50 rounded-full mb-4">
                <span className="text-3xl text-teal-600">
                    {icon}
                </span>
            </div>
            
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 leading-snug">
                {title}
            </h3>
        </div>
    );
}