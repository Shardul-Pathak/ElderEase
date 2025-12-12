import NotAuthorized from '../components/NotAuthorized';

export default function CaregiverDashboard({isLoggedIn}) {
  const elder = {
    name: "Mrs. Lata Sharma",
    age: 72,
    gender: "Female",
    photo: "",
    phone: "+91 9876543210",
    address: "Nagpur, Maharashtra",
  };

  const today = {
    mood: "Not Good",
    moodIcon: "😟",
    medTaken: false,
    sleep: "Poor",
    water: "Low",
    activity: "None",
  };

  const alerts = [];
  if (today.mood === "Not Good") alerts.push("Elder is feeling unwell today.");
  if (!today.medTaken) alerts.push("Medicines have NOT been taken.");
  if (today.sleep === "Poor") alerts.push("Sleep quality was poor.");
  if (today.water === "Low") alerts.push("Water intake is very low.");

  const trend = [
    { day: "M", mood: 3 },
    { day: "T", mood: 4 },
    { day: "W", mood: 2 },
    { day: "T", mood: 5 },
    { day: "F", mood: 3 },
    { day: "S", mood: 4 },
    { day: "S", mood: 1 },
  ];

  if (!isLoggedIn) {
    return (
      <NotAuthorized />
    );
  }

  return (
    <div className="min-h-screen bg-[#eef8f7] px-5 py-10 flex justify-center">
      <div className="w-full max-w-5xl space-y-10">
        <div className="bg-white shadow p-6 rounded-2xl flex items-center gap-6 border-l-4 border-teal-600">
          <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
          <div>
            <h1 className="text-3xl font-bold text-teal-700">{elder.name}</h1>
            <p className="text-gray-700">Age {elder.age} • {elder.gender}</p>
            <p className="text-gray-600">{elder.phone}</p>
            <p className="text-gray-600">{elder.address}</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-teal-700 mb-4">Today's Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white shadow p-5 rounded-xl text-center">
              <p className="text-4xl">{today.moodIcon}</p>
              <p className="font-semibold mt-2">Mood</p>
              <p className="text-red-600">{today.mood}</p>
            </div>
            <div className="bg-white shadow p-5 rounded-xl text-center">
              <p className="text-4xl">{today.medTaken ? "✔️" : "❌"}</p>
              <p className="font-semibold mt-2">Medicines</p>
              <p className={today.medTaken ? "text-green-600" : "text-red-600"}>
                {today.medTaken ? "Taken" : "Missed"}
              </p>
            </div>
            <div className="bg-white shadow p-5 rounded-xl text-center">
              <p className="text-4xl">😴</p>
              <p className="font-semibold mt-2">Sleep</p>
              <p className="text-teal-700">{today.sleep}</p>
            </div>
            <div className="bg-white shadow p-5 rounded-xl text-center">
              <p className="text-4xl">🚶</p>
              <p className="font-semibold mt-2">Activity</p>
              <p className="text-teal-700">{today.activity}</p>
            </div>
          </div>
        </div>

        {alerts.length > 0 && (
          <div className="bg-red-50 border border-red-300 p-6 rounded-xl">
            <h2 className="text-xl font-bold text-red-700 mb-2">⚠ Important Alerts</h2>
            <ul className="space-y-1">
              {alerts.map((alert, idx) => (
                <li key={idx} className="text-red-700">• {alert}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-bold text-teal-700 mb-4">Weekly Mood Trend</h2>

          <div className="flex items-end gap-4 justify-center">
            {trend.map((t, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-6 bg-teal-500 rounded-t-lg mx-auto"
                  style={{ height: `${t.mood * 20}px` }}
                ></div>
                <p className="mt-1 font-medium text-gray-700">{t.day}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-bold text-teal-700 mb-4">Medicine Schedule</h2>

          <div className="space-y-3">
            <div className="p-3 bg-[#f7fdfc] border rounded-xl flex justify-between">
              <p>8:00 AM — BP Tablet</p>
              <span>✔️</span>
            </div>
            <div className="p-3 bg-[#f7fdfc] border rounded-xl flex justify-between">
              <p>1:00 PM — Diabetes Tablet</p>
              <span>❌</span>
            </div>
            <div className="p-3 bg-[#f7fdfc] border rounded-xl flex justify-between">
              <p>8:00 PM — Calcium</p>
              <span>❌</span>
            </div>
          </div>
        </div>

        <div className="bg-white shadow p-6 rounded-xl">
          <h2 className="text-xl font-bold text-teal-700 mb-3">Notes Exchange</h2>

          <div className="space-y-3">
            <div className="bg-teal-50 p-3 rounded-xl">
              <p><strong>Elder:</strong> "Feeling a bit tired today."</p>
            </div>

            <textarea
              className="w-full p-3 border rounded-xl"
              rows="3"
              placeholder="Write a note for your elder..."
            ></textarea>

            <button className="w-full py-2 bg-teal-700 text-white rounded-xl font-semibold">
              Send Note
            </button>
          </div>
        </div>

        <button className="w-full py-4 bg-red-600 text-white font-bold rounded-xl">
          🚨 Emergency Contact
        </button>

      </div>
    </div>
  );
}
