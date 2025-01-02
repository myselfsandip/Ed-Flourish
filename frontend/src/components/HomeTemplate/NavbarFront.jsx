import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBarFront = () => {
  const [isOpen, setIsOpen] = useState(false);

  const LogoSection = () => (
    <div className="flex items-center space-x-3">
      <div className="rounded-lg overflow-hidden">
        {/* <img src={logo} alt="EdFlourish Logo" className="h-10 w-auto" /> */}
      </div>
      <h3 className="text-xl font-semibold text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        EdFlourish
      </h3>
    </div>
  );

  const HamburgerMenu = () => (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-col space-y-1.5 p-2 focus:outline-none"
      >
        <div className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        <div className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
        <div className="w-6 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
      </button>
    </div>
  );

  const DesktopLinks = () => (
    <div className="hidden lg:flex items-center space-x-4">
      <Link
        to={"/login"}
        className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-blue-500/20"
      >
        Login
      </Link>
      <Link
        to={"/register"}
        className="px-6 py-2 text-white bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 rounded-lg font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-green-500/20"
      >
        Register
      </Link>
    </div>
  );

  const MobileMenu = () => (
    <div className="lg:hidden bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="px-6 py-4 flex justify-center space-x-4">
        <Link
          to={"/login"}
          className="px-6 py-2 text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-blue-500/20"
          onClick={() => setIsOpen(false)}
        >
          Login
        </Link>
        <Link
          to={"/register"}
          className="px-6 py-2 text-white bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 rounded-lg font-medium transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-green-500/20"
          onClick={() => setIsOpen(false)}
        >
          Register
        </Link>
      </div>
    </div>
  );

  return (
    <div data-theme="night" className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <LogoSection />
        <HamburgerMenu />
        <DesktopLinks />
      </nav>
      {isOpen && <MobileMenu />}
    </div>
  );
};

export default NavBarFront;
