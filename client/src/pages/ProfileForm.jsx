import updateProfile from '../services/updateProfile';

export default function UserForm() {
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await updateProfile(e);
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            className="mt-12 p-6 bg-white shadow-2xl rounded-xl space-y-5 border-t-4 border-teal-600 w-full max-w-lg mx-auto"
        >
            <h2 className="text-2xl font-bold text-gray-800">Update Profile</h2>
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="e.g., John Doe"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
            </div>

            <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                    Gender
                </label>
                <select
                    name="gender"
                    id="gender"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                    Age
                </label>
                <input
                    type="number"
                    name="age"
                    id="age"
                    placeholder="e.g., 28"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                />
            </div>

            <div>
                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                    Bio
                </label>
                <textarea
                    name="bio"
                    id="bio"
                    placeholder="Short description..."
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-teal-500 focus:border-teal-500"
                ></textarea>
            </div>

            <button
                type="submit"
                className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition duration-150"
            >
                Update User
            </button>
        </form>
    );
}
