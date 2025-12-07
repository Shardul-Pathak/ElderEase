import Voice from "./components/Voice.jsx";

const App = () => {
  const handleIntent = (intent) => {
    console.log("Detected Intent:", intent);

    if (intent.intent === "CREATE_REMINDER") {
      // Save reminder to database
    }

    if (intent.intent === "LOG_SYMPTOM") {
      // Save symptom log
    }

    if (intent.intent === "EMERGENCY") {
      // Trigger emergency workflow
    }

    if (intent.intent === "NAVIGATE") {
      // Navigate user
    }
  };

  return <Voice onIntentDetected={handleIntent} />;
};

export default App;
