export default function Navbar() {
    return (
        // Outer container for the entire header (full width)
        // BACKGROUND CHANGE: bg-white (White)
        // TEXT CHANGE: text-gray-800 (Dark Text)
        <header className="bg-white shadow-xl">
            <nav className="
                flex flex-col md:flex-row items-center justify-between
                max-w-7xl mx-auto p-4
            "> 
                
                {/* Branding/Logo Section */}
                {/* TEXT CHANGE: The accent color is kept for the brand name for distinction */}
                <div className="text-2xl font-extrabold text-teal-600 mb-4 md:mb-0">
                    <a href="#">ElderlyEase</a>
                </div>

                {/* Navigation Links Group */}
                <div className="
                    flex flex-col items-center space-y-3 /* Mobile default: stack and center with vertical spacing */
                    md:flex-row md:space-y-0 md:space-x-8 /* Desktop: row and horizontal spacing */
                    text-gray-800 /* Applies dark text color to links */
                ">
                    {/* Link 1: Home */}
                    <a href="#" className="
                        font-semibold border-b-2 border-transparent 
                        hover:border-gray-500 hover:text-gray-500 /* HOVER CHANGE: Subtle gray accent */
                        transition duration-300 py-1 px-2
                    ">
                        Home
                    </a>
                    
                    {/* Link 2: Reminders */}
                    <a href="#" className="
                        font-semibold border-b-2 border-transparent 
                        hover:border-gray-500 hover:text-gray-500
                        transition duration-300 py-1 px-2
                    ">
                        Reminders
                    </a>
                    
                    {/* Link 3: Check-In */}
                    <a href="#" className="
                        font-semibold border-b-2 border-transparent 
                        hover:border-gray-500 hover:text-gray-500
                        transition duration-300 py-1 px-2
                    ">
                        Check-In
                    </a>
                    
                    {/* Link 4: Settings */}
                    <a href="#" className="
                        font-semibold border-b-2 border-transparent 
                        hover:border-gray-500 hover:text-gray-500
                        transition duration-300 py-1 px-2
                    ">
                        Settings
                    </a>
                </div>
            </nav>
        </header>
    )
}