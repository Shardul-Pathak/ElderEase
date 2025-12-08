import Voice from "./components/Voice.jsx";

const App = () => {
  const handleIntent = (intent) => {
    console.log("Detected Intent:", intent);

    if (intent.intent === "CREATE_REMINDER") {
    }

    if (intent.intent === "LOG_SYMPTOM") {
    }

    if (intent.intent === "EMERGENCY") {
    }

    if (intent.intent === "NAVIGATE") {
    }
  };

  return <Voice onIntentDetected={handleIntent} />;
};

export default App;
