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
            <Sidebar currentpage="JAVA" currentpageUrl="/java" isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            {/* Main Content */}
            <div className="flex-1 ml-72 lg:ml-0 relative overflow-y-auto h-screen">
                {/* Navbar */}
                <Navbar page="Java" onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

                {/* Main content area */}
                <div className="mt-16 p-4 bg-gray-900">
                    <MainContentSection />
                </div>
            </div>
        </div>
    );
};

export default SheetTemplate;
