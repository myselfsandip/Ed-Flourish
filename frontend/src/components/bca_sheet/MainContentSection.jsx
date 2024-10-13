// import { Routes, Route } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Semester } from "./Semester";
import YearlyQuestions from "./YearlyQuestions";
import MockText from "./MockTest";

function MainContentSection() {

    {/* Routes */ }

    return (
            <Routes>
                <Route path="sem1" element={<Semester sem={1} />} />
                <Route path="sem2" element={<Semester sem={2} />} />
                <Route path="sem3" element={<Semester sem={3} />} />
                <Route path="sem4" element={<Semester sem={4} />} />
                <Route path="yearly_questions" element={<YearlyQuestions/>} />
                <Route path="mock_test" element={<MockText/>} />
            </Routes>
    );
}

export default MainContentSection;
