import { Route, Routes, Navigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { Semester } from "./Semester"
import YearlyQuestions from "./YearlyQuestions"
import MockTest from "./MockTest"
import Settings from "./Settings"
import PageNotFound from "../PageNotFound"
import Dashboard from "./Dashboard"

const pageVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    enter: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.2,
            ease: "easeIn",
        },
    },
}

function MainContentSection() {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial="initial"
                animate="enter"
                exit="exit"
                variants={pageVariants}
                className="min-h-screen bg-[#0B1121] relative overflow-hidden"
            >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />

                {/* Content */}
                <div className="relative z-10">
                    <Routes>
                        <Route path="/" element={<Navigate to="/bca/sem1" />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/sem1" element={<Semester sem={1} />} />
                        <Route path="sem2" element={<Semester sem={2} />} />
                        <Route path="sem3" element={<Semester sem={3} />} />
                        <Route path="sem4" element={<Semester sem={4} />} />
                        <Route path="yearly_questions" element={<YearlyQuestions />} />
                        <Route path="mock_test" element={<MockTest />} />
                        <Route path="settings" element={<Settings />} />
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default MainContentSection

