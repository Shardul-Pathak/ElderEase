export default function Home() {
  return (
    <div className="bg-[#f5f8fa] min-h-screen flex items-center justify-center font-sans text-gray-800">

      <div className="max-w-xs sm:max-w-sm bg-white p-8 rounded-2xl shadow-xl text-center">
        
        <div className="bg-[#0a7a7a] text-white py-2 rounded-xl text-3xl font-bold mb-3">
          ElderEase
        </div>

        <p className="text-gray-600 mb-5">Simple. Safe. Connected.</p>

        <input
          type="text"
          placeholder="Enter Username"
          className="w-full p-3 mb-3 border border-gray-400 rounded-lg text-lg"
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 mb-4 border border-gray-400 rounded-lg text-lg"
        />

        <button className="w-full py-3 rounded-full bg-black text-white text-lg hover:bg-white hover:text-black border border-black transition">
          Login Now
        </button>

      </div>

    </div>
  );
}
