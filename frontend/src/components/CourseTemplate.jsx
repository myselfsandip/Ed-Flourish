import MainContentSection from "./MainContentSection";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";

function CourseTemplate() {
    return (
        <div data-theme="night" className="flex">
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
}



export default CourseTemplate;
