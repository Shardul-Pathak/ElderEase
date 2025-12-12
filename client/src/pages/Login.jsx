import GoogleLoginButton from "../components/GoogleLogin";
import handleLogin from "../services/login"

export default function Login({setIsLoggedIn}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(e, setIsLoggedIn);
        setIsLoggedIn(true)
    };

    return (
        <div className="bg-[#f5f8fa] min-h-screen flex items-center justify-center p-6 font-sans text-gray-800">
            <div className="max-w-sm w-full bg-white border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0_0_#000]">

                <h1 className="text-4xl font-extrabold mb-1">ElderEase</h1>
                <p className="text-gray-600 mb-8">Simple. Safe. Connected.</p>

                <form onSubmit={handleSubmit}>
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
                        <GoogleLoginButton role={null} setIsLoggedIn={setIsLoggedIn}/>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 text-lg font-bold text-white bg-[#0a7a7a] border-2 border-black rounded-xl shadow-[0_6px_0_0_#000] hover:bg-teal-800"
                    >
                        SIGN IN
                    </button>

                    <p className="mt-4 text-center">
                        Need an account?{" "}
                        <a href="/signup" className="underline font-semibold">
                            Signup
                        </a>
                    </p>
                </form>
            </div>
        </div>
    );
}
