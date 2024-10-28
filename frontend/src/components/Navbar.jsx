import React, { useState } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { RiMenu3Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export const Navbar = ({ onMenuClick ,page }) => {
    const [dropdownState, setDropdownState] = useState(false);

    return (
        <div className="fixed top-0 left-0 lg:left-72 right-0 z-10 bg-gray-900 border-b border-gray-800 shadow-md">
            <div className="flex items-center justify-between px-4 lg:px-6 py-4">
                <div className="flex items-center space-x-4">
                    {/* Mobile menu button */}
                    <button
                        onClick={onMenuClick}
                        className="lg:hidden text-gray-400 hover:text-gray-200"
                    >
                        <RiMenu3Line className="text-2xl" />
                    </button>
                    
                    <a className="text-xl lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        {page} Portal
                    </a>
                </div>

                <div className="relative">
                    <button
                        onClick={() => setDropdownState(!dropdownState)}
                        className="flex items-center space-x-2 rounded-lg p-2 hover:bg-gray-800 transition-colors duration-200"
                    >
                        <FaRegUserCircle className="text-2xl text-gray-400" />
                    </button>
                    {dropdownState && (
                        <div className="absolute right-0 mt-2 w-48 rounded-lg bg-gray-800 border border-gray-700 shadow-lg">
                            <Link className="block px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">Profile</Link>
                            <Link to={"/" + page + "/settings"} className="block px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer">Settings</Link>
                            <div className="border-t border-gray-700"></div>
                            <Link className="block px-4 py-2 text-red-400 hover:bg-gray-700 cursor-pointer">Logout</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};