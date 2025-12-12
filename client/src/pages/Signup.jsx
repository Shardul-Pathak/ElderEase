import GoogleLoginButton from "../components/GoogleLogin";
import { useState } from "react";
import handleSignup from "../services/signup"

export default function Signup({setIsLoggedIn}) {
    const [role, setRole] = useState("ELDER");

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignup(e, setIsLoggedIn, role)
    };

    return (
        <div className="bg-[#f5f8fa] min-h-screen flex items-center justify-center p-6 font-sans text-gray-800">
            <div className="max-w-sm w-full bg-white border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0_0_#000]">

                <h1 className="text-4xl font-extrabold mb-1">ElderEase</h1>
                <p className="text-gray-600 mb-8">Simple. Safe. Connected.</p>

                <form onSubmit={handleSubmit}>
                    <label className="font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full p-3 mt-1 mb-5 text-lg border-2 border-black rounded-xl"
                    />

                    <label className="font-semibold">I am a</label>
                    <div className="flex space-x-4 mt-2 mb-6">
                        <button
                            type="button"
                            onClick={() => setRole("ELDER")}
                            className={`px-8 py-3 rounded-xl border-2 font-semibold text-lg ${
                                role === "ELDER"
                                    ? "bg-[#0a7a7a] text-white border-black shadow-[0_6px_0_0_#000]"
                                    : "bg-white text-black border-black"
                            }`}
                        >
                            Senior
                        </button>

                        <button
                            type="button"
                            onClick={() => setRole("FAMILY")}
                            className={`px-8 py-3 rounded-xl border-2 font-semibold text-lg ${
                                role === "FAMILY"
                                    ? "bg-[#0a7a7a] text-white border-black shadow-[0_6px_0_0_#000]"
                                    : "bg-white text-black border-black"
                            }`}
                        >
                            Family
                        </button>
                    </div>

                    <input type="hidden" name="role" value={role} />

                    <label className="font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full p-3 mt-1 mb-5 text-lg border-2 border-black rounded-xl"
                    />

                    <label className="font-semibold">Password</label>
                    <input
                        type="password"
                        name="password"
                        required
                        className="w-full p-3 mt-1 mb-6 text-lg border-2 border-black rounded-xl"
                    />

                    <div className="m-4 border-2 rounded-xl p-0.5">
                        <GoogleLoginButton role={role} setIsLoggedIn={setIsLoggedIn}/>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 text-lg font-bold text-white bg-[#0a7a7a] border-2 border-black rounded-xl shadow-[0_6px_0_0_#000] hover:bg-teal-800"
                    >
                        CREATE ACCOUNT
                    </button>

                    <p className="mt-4 text-center">
                        Already have an account?{" "}
                        <a href="/login" className="underline font-semibold">
                            Sign In
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
