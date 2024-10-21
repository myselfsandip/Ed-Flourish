import { Routes, Route } from "react-router-dom";
import JavaSheet from "./JavaSheet"
import PageNotFound from "../PageNotFound"

function MainContentSection() {
    {/* Routes */ }

    return (
        <Routes>
            <Route path="/" element={<JavaSheet />} />
            <Route path="/*" element={<PageNotFound />} />
        </Routes>
    );
}

export default MainContentSection;
