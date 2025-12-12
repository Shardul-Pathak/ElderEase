import { Home, Calendar, Heart, Settings } from "lucide-react";

export default function Navbar() {
    return (
        <div className="
            fixed bottom-0 left-0 w-full 
            bg-white border-t-2 border-black py-3 
            z-50
        ">
            <div className="max-w-5xl mx-auto flex justify-around items-center text-center">
                <NavItem icon={<Home size={30} strokeWidth={2.5} />} label="HOME" navigate="/home" />
                <NavItem icon={<Calendar size={30} strokeWidth={2.5} />} label="REMINDERS" navigate="/reminders" />
                <NavItem icon={<Heart size={30} strokeWidth={2.5} />} label="CHECK-IN" navigate="/checkin"/>
                <NavItem icon={<Settings size={30} strokeWidth={2.5} />} label="SETTINGS" navigate="/settings"/>
            </div>
        </div>
    );
}

function NavItem({ icon, label, navigate }) {
    return (
        <a href={navigate}>
            <div className="flex flex-col items-center gap-1">
                {icon}
                <span className="text-[10px] sm:text-xs font-extrabold tracking-wide">
                    {label}
                </span>
            </div>
        </a>
    );
}
