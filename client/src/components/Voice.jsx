import { useState, useEffect, useRef } from "react";
import { MutedMicIcon, MicIcon } from "./Mic";

export default function Voice({ onIntentDetected }) {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState("");
    const [confirmed, setConfirmed] = useState(false);

    const recognitionRef = useRef(null);
    
    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition;
        const recognition = new SpeechRecognition();
        recognition.lang = "en-IN";
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setTranscript(text);
            speak("I heard you say: " + text + ". Should I proceed?");
            setIsListening(false);
        }

        recognition.onerror = (event) => {
            console.error("Speech recognition error", event);
            setIsListening(false);
        }

        recognitionRef.current = recognition;
    }, []);

    const speak = (text) => {
        const message = new SpeechSynthesisUtterance(text);
        message.rate = 0.85;
        message.pitch = 1;
        message.volume = 1;
        message.lang = "en-IN";
        window.speechSynthesis.speak(message);
    };

    const startListening = () => {
        setTimeout(() => {
            setTranscript("");
            setConfirmed(false);
            setIsListening(true);
            recognitionRef.current.start();
        }, 1750);
        console.log("Listening started");
        speak("Please speak now.");
    };

    const confirmTranscript = () => {
        speak("Okay, processing your request.");
        setConfirmed(true);
        const intent = detectIntent(transcript);
        onIntentDetected(intent);
    };

    const tryAgain = async () => {
        speak("Didn't catch that. Please try again.");
        setTimeout(() => {
            setTranscript("");
            setConfirmed(false);
            startListening();
        }, 1000);
    };

    const detectIntent = (text) => {
        const lower = text.toLowerCase();

        if(lower.includes("navigate") || lower.includes("go to") || lower.includes("open") || lower.includes("show")) {
            return {
                intent: "NAVIGATE",
                target: extractNavigationTarget(lower),
                raw: text,
            };
        }

        if(lower.includes("emergency") || lower.includes("help") || lower.includes("alert") || lower.includes("sos") || lower.includes("call")) {
            return { 
                intent: "EMERGENCY", 
                raw: text 
            };
        }

        if(lower.includes("feel") || lower.includes("feeling") || lower.includes("symtoms") || lower.includes("sick") || lower.includes("unwell")) {
            return {
                intent: "LOG_SYMPTOM",
                symptom: text.replace("I feel", "").trim(),
                raw: text,
            };
        }

        if(lower.includes("reminder") || lower.includes("remind") || lower.includes("alert me") || lower.includes("notify me")) {
            return {
                intent: "CREATE_REMINDER",
                raw: text,
                time: extractTime(lower),
                item: extractMedicine(lower),
            };
        }
        return { intent: "UNKNOWN", raw: text };
    }

    const extractTime = (text) => {
        const timeRegex = /\b(\d{1,2})(:\d{2})?\s?(am|pm)?\b/;
        const match = text.match(timeRegex);
        return match ? match[0] : null;
    };

    const extractMedicine = (text) => {
        if (text.includes("bp")) return "BP medicine";
        if (text.includes("diabetes")) return "Diabetes medicine";
        if (text.includes("thyroid")) return "Thyroid medicine";
        return "Medicine";
    };

    const extractNavigationTarget = (text) => {
        if (text.includes("reminder")) return "reminders";
        if (text.includes("emergency")) return "emergency";
        if (text.includes("check in")) return "checkin";
        return "home";
    };

    const handleMuteMic = () => {
        recognitionRef.current.stop();
        setIsListening(false);
        speak("Microphone muted.");
    };

    return (
        <>
            <div className="flex justify-center text-center p-20">
                {!isListening && !transcript && (
                    <button onClick={startListening} className="rounded-full bg-blue-700 hover:bg-blue-500 text-white font-bold py-4 px-4 shadow-2xs shadow-black">
                        <MutedMicIcon />
                    </button>
                )}

                {isListening && (
                    <>
                        <button onClick={handleMuteMic} className="rounded-full bg-teal-500 text-white font-bold py-4 px-4 hover:bg-teal-700">
                            <MicIcon />
                        </button>
                    </>
                )}

                {transcript && (
                <div
                    className="
                        fixed inset-0 z-50
                        bg-black/40 backdrop-blur-sm
                        flex items-center justify-center
                        p-4
                        animate-[fadeIn_.3s_ease]
                    "
                >
                    <div
                        className="
                            bg-white rounded-3xl shadow-2xl
                            p-6 sm:p-8 w-full max-w-lg
                            animate-[zoom_.3s_ease]
                        "
                    >
                        {!confirmed && (
                            <>
                                <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#0a7a7a] mb-4 text-center">
                                    You said
                                </h2>

                                <div className="bg-[#f1f1f1] p-5 rounded-2xl text-[22px] sm:text-[26px] font-medium text-gray-800 text-center mb-8 border border-gray-300">
                                    “{transcript}”
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button
                                        onClick={confirmTranscript}
                                        className="
                                            px-10 py-4 text-xl sm:text-2xl font-semibold
                                            bg-green-700 text-white
                                            rounded-xl shadow-md
                                            hover:scale-105 active:scale-95
                                            transition-all duration-200
                                        "
                                    >
                                        Yes
                                    </button>

                                    <button
                                        onClick={tryAgain}
                                        className="
                                            px-10 py-4 text-xl sm:text-2xl font-semibold
                                            bg-gray-600 text-white
                                            rounded-xl shadow-md
                                            hover:scale-105 active:scale-95
                                            transition-all duration-200
                                        "
                                    >
                                        Try Again
                                    </button>
                                </div>
                            </>
                        )}

                        {confirmed && (
                            <div className="font-bold text-3xl py-10 text-center animate-pulse text-[#0a7a7a]">
                                Processing…
                            </div>
                        )}
                    </div>
                </div>
            )}
            </div>
        </>
    )
}