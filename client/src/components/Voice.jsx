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
        if (text.includes("check in")) return "check-in";
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
                    <button onClick={startListening} className="rounded-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-4 shadow-2xs shadow-black">
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

                {transcript && !confirmed && (
                    <div>
                        <div className="text-[28px] font-bold mb-5 text-black">
                            You said:
                        </div>

                        <div className="bg-[#f1f1f1] p-5 rounded-xl text-[26px]">
                            “{transcript}”
                        </div>

                        <div className="mt-8 flex items-center">
                            <button onClick={confirmTranscript} className="px-10 py-5 mr-5 text-2xl bg-green-700 text-white rounded-xl border-none">
                                ✔ Yes
                            </button>

                            <button onClick={tryAgain} className="px-10 py-5 text-2xl bg-gray-500 text-white rounded-xl border-none">
                                ✖ Try Again
                            </button>
                        </div>
                    </div>
                )}
                {confirmed && (
                    <div className="font-bold text-2xl">
                        Processing…
                    </div>
                )}
            </div>
        </>
    )
}