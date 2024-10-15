// import { Routes, Route } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router-dom";
import { Semester } from "./Semester";
import YearlyQuestions from "./YearlyQuestions";
import MockText from "./MockTest";
import PageNotFound from "../PageNotFound";


function MainContentSection() {

    {/* Routes */ }

    return (
            <Routes>
                <Route path="/" element={<Navigate to="/bca/sem1" />} />
                <Route path="/sem1" red element={<Semester sem={1} />} />
                <Route path="sem2" element={<Semester sem={2} />} />
                <Route path="sem3" element={<Semester sem={3} />} />
                <Route path="sem4" element={<Semester sem={4} />} />
                <Route path="yearly_questions" element={<YearlyQuestions/>} />
                <Route path="mock_test" element={<MockText/>} />
                <Route path="/*" element={<PageNotFound/>} />
            </Routes>
    );
}

export default MainContentSection;
