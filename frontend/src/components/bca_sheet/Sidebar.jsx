import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegUserCircle, FaGraduationCap, FaBook, FaClipboardList, FaTimes } from 'react-icons/fa';
import { IoMdSettings } from "react-icons/io";

export const Sidebar = ({ isOpen, setIsOpen }) => {
    const [isBCADropdownOpen, setBCADropdownOpen] = useState(false);

    const toggleBCADropdown = () => {
        setBCADropdownOpen(!isBCADropdownOpen);
    };

    const sidebarClasses = `
        fixed inset-y-0 left-0 z-30 w-72 h-screen bg-gray-900 text-gray-300 border-r border-gray-800
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static
    `;

    return (
        <div className={sidebarClasses}>
            <div className="h-full flex flex-col">
                {/* Header */}
                <div className="px-6 py-8">
                    <div className="flex items-center justify-between mb-8">
                        <Link to={"/"} className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">Ed</span>
                            </div>
                            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                BCA Portal
                            </h2>
                        </Link>
                        {/* Close button for mobile */}
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="lg:hidden text-gray-400 hover:text-gray-200"
                        >
                            <FaTimes className="text-xl" />
                        </button>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-8">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-gray-800/50 text-gray-300 rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        />
                        <svg
                            className="w-5 h-5 absolute right-3 top-2.5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>

                    {/* Navigation Menu */}
                    <nav className="space-y-2">
                        <Link
                            to="/profile"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaRegUserCircle className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                            <span className="group-hover:text-gray-100">Profile</span>
                        </Link>

                        {/* BCA Dropdown */}
                        <div className="space-y-1">
                            <button
                                onClick={toggleBCADropdown}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                            >
                                <div className="flex items-center space-x-3">
                                    <FaGraduationCap className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                                    <span className="group-hover:text-gray-100">BCA</span>
                                </div>
                                <svg
                                    className={`w-5 h-5 transition-transform duration-200 ${isBCADropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </button>

                            {isBCADropdownOpen && (
                                <div className="pl-12 space-y-1">
                                    {[1, 2, 3, 4].map((sem) => (
                                        <Link
                                            key={sem}
                                            to={`/bca/sem${sem}`}
                                            className="block px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200 hover:text-gray-100"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Semester {sem}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            to="/bca/yearly_questions"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaBook className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                            <span className="group-hover:text-gray-100">Yearly Questions</span>
                        </Link>

                        <Link
                            to="/bca/mock_test"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaClipboardList className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                            <span className="group-hover:text-gray-100">Mock Test</span>
                        </Link>
                        <Link
                            to="/bca/settings"
                            className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
                        >
                            <IoMdSettings className="w-5 h-5 text-gray-400 group-hover:text-blue-400" />
                            <span className="group-hover:text-gray-100">Settings</span>
                        </Link>
                    </nav>
                </div>

                {/* User Profile Section */}
                <div className="mt-auto p-4">
                    <div className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-gray-800/50">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                            <span className="text-white font-medium">JD</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-100">John Doe</h4>
                            <p className="text-xs text-gray-400">Student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
