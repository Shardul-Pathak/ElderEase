// client/src/pages/LandingPage.jsx

import React from 'react';
import FeatureBlock from '../components/FeatureBlock';
import QuoteCard from '../components/QuoteCard'; // Correctly importing the finalized component

// Mock Data for Features
const featuresData = [
    { icon: '⏰', title: 'Medication & Routine Reminders' },
    { icon: '❤️', title: 'One-Tap Emergency Assist' },
    { icon: '🎙️', title: 'Voice-Assisted Interaction' },
    { icon: '🌿', title: 'Daily Well-Being Check-in' },
];

// Mock Data for Quotes
const quoteSectionData = [
    { quote: "ElderEase has given me much peace of mind. It's easy use and helpful!", source: '- Mary S., 78', icon: '💬' },
    { quote: "I feel connected to my mom now, get alerts to stay safe!", source: '- John K., Caregiver', icon: '💬' },
    { quote: "I feel connected and my health is monitored quickly.", source: '- Robert L., 85', icon: '💬' },
];

export default function LandingPage() {
    return (
        <div className="bg-blue-50/50 min-h-screen">
            
            {/* --- 1. HERO SECTION --- */}
            <section className="pt-16 pb-20 px-4 max-w-7xl mx-auto">
                <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Content */}
                        <div>
                            <p className="text-teal-600 font-bold text-lg mb-2">ElderEase</p>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                                ElderEase – Helping Elderly Live Safer, Healthier & Connected
                            </h1>
                            <p className="text-xl text-gray-600 mb-8">
                                A simple support system for reminders, emergencies, and well-being.
                            </p>
                            
                            {/* Action Buttons */}
                            <div className="flex space-x-4">
                                <button className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-teal-700 transition">
                                    Get Started
                                </button>
                                <button className="border border-teal-600 text-teal-600 font-semibold py-3 px-8 rounded-full hover:bg-teal-50 transition">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Oldie photo */}
                        <div className="hidden lg:block">
                            <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center text-gray-500">
                                [Oldie ki photo?]
                            </div>
                        </div>
                    </div>

                    {/* Feature Blocks Grid */}
                    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
                        {featuresData.map((feature, index) => (
                            <FeatureBlock key={index} feature={feature} />
                        ))}
                    </div>
                </div>
            </section>

            {/* --- 2. ABOUT US & QUOTES SECTION --- */}
            <section className="py-20 px-4 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">About Us</h2>
                    <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
                        At ElderEase, our mission is to empower seniors with technology that simplifies their daily lives, ensuring they live safer, healthier, and connected. We believe in creating user-centric solutions. ElderEase provides essential tools like reminders and well-being support to build a connected life.
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-teal-600 mb-6">User Quotes</h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {quoteSectionData.map((quoteData, index) => (
                        <QuoteCard key={index} quoteData={quoteData} />
                    ))}
                </div>
            </section>
        </div>
    );
}