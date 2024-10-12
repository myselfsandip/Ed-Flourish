import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";

export const Sidebar = () => {

    const [isBCADropdownOpen, setBCADropdownOpen] = useState(false);

    const toggleBCADropdown = () => {
        setBCADropdownOpen(!isBCADropdownOpen);
    };

    return (
        <div className="sidebar min-h-screen w-64 bg-base-200 text-base-content p-4 fixed">
            <h2 className="text-lg font-bold text-center mb-4 py-4">BCA</h2>
            <ul className="menu mt-4 space-y-3">
                {/* Profile */}
                <li>
                    <a href="#" className="flex items-center space-x-2 hover:bg-slate-500 hover:text-white p-2 rounded-lg text-xl">
                        <FaRegUserCircle />
                        <span>Profile</span>
                    </a>
                </li>
                {/* BCA with dropdown */}
                <li>
                    <div
                        onClick={toggleBCADropdown}
                        className="flex justify-between items-center cursor-pointer hover:bg-slate-500 hover:text-white p-2 rounded-lg text-xl"
                    >
                        <span>BCA</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-5 w-5 transition-transform duration-300 ${
                                isBCADropdownOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                    {isBCADropdownOpen && (
                        <ul className="pl-6 space-y-1">
                            <li>
                                <a href="#" className="hover:bg-slate-500 hover:text-white p-2 rounded-lg text-lg">
                                    Semester 1
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:bg-slate-500 hover:text-white p-2 rounded-lg text-lg">
                                    Semester 2
                                </a>
                            </li>
                        </ul>
                        
                    )}
                </li>
                <li>Yearly Questions</li>
            </ul>
        </div>
    );
};