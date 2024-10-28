import { Sidebar } from "../Sidebar";
import { Navbar } from "../Navbar";
import MainContentSection from "./MainContentSection";
import { useState } from "react";


const SheetTemplate = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex bg-gray-900">
            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}
            {/* Sidebar */}
            <Sidebar currentpage="DSA" currentpageUrl="/dsa"  isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {/* Main Content */}
            <div className="relative"> {/* Adding margin to adjust for the fixed sidebar */}
                {/* Navbar */}
                <Navbar  page="Dsa" onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

                {/* Main content area */}
                <div className="mt-16 p-4 bg-gray-900 relative overflow-x-hidden"> {/* Adding top margin to accommodate fixed Navbar */}
                    <MainContentSection />
                </div>
            </div>
        </div>
    );
};

export default SheetTemplate;
