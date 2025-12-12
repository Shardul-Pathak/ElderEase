export default function NotAuthorized () {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center p-6 text-teal-700">
                <div className="w-full max-w-md p-10 rounded-2xl shadow-xl border border-black text-center space-y-6">
                    <h2 className="text-3xl font-semibold mb-2">Access Restricted</h2>
                    <p className="text-gray-700 text-base">You must be logged in to upload a post.</p>
                    <a href="/login" className="block w-full bg-teal-700 hover:bg-teal-800 text-white font-medium py-3 rounded-xl transition-all">
                         Go to Login
                    </a>
                    <p className="text-m text-gray-700">
                        Don't have an account? <a href="/signup" className="text-[#5b85f9] hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </>
    )
}