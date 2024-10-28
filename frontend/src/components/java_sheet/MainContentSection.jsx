import { Routes, Route } from "react-router-dom";
import JavaSheet from "./JavaSheet"
import PageNotFound from "../PageNotFound"
import Settings from "../Settings";

function MainContentSection() {
    {/* Routes */ }

    return (
        <Routes>
            <Route path="/" element={<JavaSheet />} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    );
}

export default MainContentSection;
