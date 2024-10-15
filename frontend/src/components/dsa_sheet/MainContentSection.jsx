import { Routes,Route } from "react-router-dom";
import DsaSheet from "./DsaSheet"
import PageNotFound from "../PageNotFound"

function MainContentSection() {
    {/* Routes */ }

    return (
            <Routes>
                <Route path="/" element={<DsaSheet/>} />
                <Route path="/*" element={<PageNotFound/>} />
            </Routes>
    );
}

export default MainContentSection;
