import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import MainContentSection from "./MainContentSection";


const SheetTemplate = ({}) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 ml-64"> {/* Adding margin to adjust for the fixed sidebar */}
                {/* Navbar */}
                <Navbar/>

                {/* Main content area */}
                <div className="mt-16 p-4"> {/* Adding top margin to accommodate fixed Navbar */}
                    <MainContentSection />
                </div>
            </div>
        </div>
    );
};

export default SheetTemplate;
