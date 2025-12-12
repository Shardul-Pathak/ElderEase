import { useState, useEffect } from 'react';
import NotAuthorized from '../components/NotAuthorized';
import getLogs from '../services/getLogs';

export default function CheckInList({isLoggedIn}) {
  const [checkIn, setCheckIn] = useState([]);
  const formattedDate = (date) => {
    const newDate = new Date(date)
    const formatted = newDate.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
    return formatted;
  }

  useEffect(()=> {
    const fetchData = async() => {
      const logs = await getLogs();
      setCheckIn(logs);
    }
    fetchData();
  }, [])

  if (!isLoggedIn) {
    return (
      <NotAuthorized />
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f7f7] px-4 py-10 flex justify-center">
      <div className="w-full max-w-4xl">

        <h1 className="text-3xl font-bold text-teal-700 mb-6">
          Check-ins
        </h1>
        <div className='space-x-4'>
          <a href='/home'>
            <button className='text-white text-l bg-teal-700 p-2 mb-4 rounded-2xl hover:bg-teal-800'>
              Go Back
            </button>
          </a>
          <a href='/check-in-form'>
            <button className='text-white text-l bg-teal-700 p-2 mb-4 rounded-2xl hover:bg-teal-800'>
              Add Log
            </button>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {checkIn.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-5 border-l-4 border-teal-600 hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-4xl">{item.icon}</div>

              <p className="text-xl font-semibold text-teal-800 mt-2">
                {formattedDate(item.date)}
              </p>

              <Symptom item={item}/>
    
              <a href={`/log/${item._id}`}>
                <p className="text-teal-600 font-medium mt-3">
                  Tap to view full details →
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Symptom = ({item}) => {
  if(!item.hasOwnProperty('symptom')) {
    return (
      <>
        <p className="mt-2 text-gray-700">
          <span className="font-semibold">Mood:</span> {item.mood.toUpperCase()}
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Medicines:</span>{" "}
            {item.medicine ? "Yes" : "No"}
        </p>
      </>
    )
  }
  return (
    <p className="mt-2 text-gray-700">
      <span className="font-semibold">Symptom:</span> {item.symptom.toUpperCase()}
    </p>
  )
}