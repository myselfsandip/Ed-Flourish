import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLoggedIn from "../hooks/useLoggedIn";
import { Menu, Transition } from '@headlessui/react';
import { 
    FaCode, 
    FaUserCircle, 
    FaCog, 
    FaSignOutAlt, 
    FaBars, 
    FaTimes 
} from 'react-icons/fa';
import { FaUserCheck } from "react-icons/fa6";


const NavBarFront = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isLoggedIn, user, loading, logout } = useLoggedIn();

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <nav className="flex justify-between items-center py-3 px-4 md:px-6 lg:px-8 bg-[#1a1b26]/95 backdrop-blur-md border-b border-[#2d2e3b]">
                {/* Left section: Logo */}
                <Link to={"/"} className="flex items-center space-x-3">
                    <div className="rounded-lg overflow-hidden">
                        <img src="../../logo/bulb.png" alt="EdFlourish Logo" className="h-10 w-auto" />
                    </div>
                    <h3 className="text-xl font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        EdFlourish
                    </h3>
                </Link>

                {/* Custom Hamburger Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-400 hover:text-white focus:outline-none"
                    >
                        {isOpen ? (
                            <FaTimes className="h-6 w-6" />
                        ) : (
                            <FaBars className="h-6 w-6" />
                        )}
                    </button>
                </div>

                {/* Right section: Buttons or Profile - Hidden on Mobile & Tablet */}
                <div className="hidden lg:flex items-center space-x-4">
                    {loading ? (
                        <div className="animate-pulse bg-[#2d2e3b] h-10 w-24 rounded-lg"></div>
                    ) : isLoggedIn ? (
                        <ProfileDropdown user={user} logout={logout} />
                    ) : (
                        <>
                            <Link
                                to={"/login"}
                                className="px-6 py-2 text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-lg font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#1a1b26] shadow-lg shadow-violet-500/20"
                            >
                                Login
                            </Link>
                            <Link
                                to={"/register"}
                                className="px-6 py-2 text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-lg font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#1a1b26] shadow-lg shadow-emerald-500/20"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </nav>

            {/* Mobile Menu - Modified to display buttons inline or profile dropdown */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
            >
                <div className="lg:hidden bg-[#1a1b26]/95 backdrop-blur-md border-b border-[#2d2e3b]">
                    <div className="px-4 py-3 space-y-3">
                        {loading ? (
                            <div className="animate-pulse bg-[#2d2e3b] h-10 w-full rounded-lg"></div>
                        ) : isLoggedIn ? (
                            <ProfileDropdown user={user} logout={logout} isMobile={true} />
                        ) : (
                            <div className="flex flex-col space-y-3">
                                <Link
                                    to={"/login"}
                                    className="w-full px-6 py-2.5 text-white text-center bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-[#1a1b26] shadow-lg shadow-violet-500/20"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Login
                                </Link>
                                <Link
                                    to={"/register"}
                                    className="w-full px-6 py-2.5 text-white text-center bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#1a1b26] shadow-lg shadow-emerald-500/20"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </Transition>
        </div>
    );
};

const ProfileDropdown = ({ user, logout, isMobile = false }) => {
    return (
        <Menu as="div" className={`relative inline-block text-left ${isMobile ? 'w-full' : ''}`}>
            <div>
                <Menu.Button className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 hover:from-blue-600 hover:via-violet-600 hover:to-purple-600 rounded-lg transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                    <img
                        src={user?.profilePicture || "https://api.dicebear.com/9.x/thumbs/svg?seed=Nolan"}
                        alt="Profile"
                        className="w-7 h-7 rounded-full mr-2 border-2 border-white/20"
                    />
                    <span className="font-semibold">{user?.name || 'User'}</span>
                    <svg className="w-4 h-4 ml-2 -mr-0.5 opacity-60" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </Menu.Button>
            </div>
            <Transition
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 w-60 mt-2 origin-top-right bg-gray-900/95 backdrop-blur-sm divide-y divide-gray-800 rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-gray-800">
                    <div className="px-1 py-2">
                        <div className="px-3 py-2 mb-2">
                            <p className="text-sm font-medium text-gray-400">Signed in as</p>
                            <p className="text-sm font-semibold text-white truncate">{user?.email || 'user@example.com'}</p>
                        </div>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="/dashboard"
                                    className={`${
                                        active ? 'bg-violet-600 text-white' : 'text-gray-200'
                                    } group flex rounded-lg items-center w-full px-3 py-2.5 text-sm font-medium transition-colors`}
                                >
                                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Dashboard
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    to="/profile"
                                    className={`${
                                        active ? 'bg-violet-600 text-white' : 'text-gray-200'
                                    } group flex rounded-lg items-center w-full px-3 py-2.5 text-sm font-medium transition-colors`}
                                >
                                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    Profile
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                    <div className="px-1 py-2">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={logout}
                                    className={`${
                                        active ? 'bg-red-600 text-white' : 'text-gray-200'
                                    } group flex rounded-lg items-center w-full px-3 py-2.5 text-sm font-medium transition-colors`}
                                >
                                    <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                    </svg>
                                    Sign out
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default NavBarFront;

