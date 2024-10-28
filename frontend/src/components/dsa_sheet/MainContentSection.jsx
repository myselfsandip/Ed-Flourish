import { Routes,Route } from "react-router-dom";
import DsaSheet from "./DsaSheet"
import Settings from "../Settings";
// import PageNotFound from "../PageNotFound";

function MainContentSection() {
    {/* Routes */ }

    return (
            <Routes>
                <Route path="/" element={<DsaSheet/>} />
                <Route path="/settings" element={<Settings/>} />
                {/* <Route path="/*" element={<PageNotFound/>} /> */}
            </Routes>
    );
}

export default MainContentSection;
