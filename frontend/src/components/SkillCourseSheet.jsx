import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBook, FaClock } from "react-icons/fa";
import { RiArticleLine, RiYoutubeLine, RiArrowRightSLine } from "react-icons/ri";
import axios from "axios";
import NavBarFront from "../components/NavBarFront";
import Footer from "../components/Footer";

const SkillCourseSheet = ({ courseName }) => {
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isOpen, setIsOpen] = useState({});

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                console.log("Fetching courses from:", `${import.meta.env.VITE_API_SERVER_URL}/api/course/`);
                const response = await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/api/course/`);
                console.log("API Response:", response.data);

                if (response.data.success) {
                    const skillCourse = response.data.data.find(
                        (c) => c.courseType === "Skill" && c.skillBasedCourseDetails?.courseName === courseName
                    );
                    console.log("Found course:", skillCourse);

                    if (skillCourse) {
                        setCourse(skillCourse);
                    } else {
                        setError(`No ${courseName} course found`);
                    }
                } else {
                    setError("Failed to fetch courses: API response unsuccessful");
                }
            } catch (err) {
                console.error("Error fetching courses:", err);
                setError(err.message || "An error occurred while fetching the course");
            } finally {
                setLoading(false);
            }
        };
        fetchCourse();
    }, [courseName]);

    const toggleSubject = (subjectId) => {
        setIsOpen((prev) => ({
            ...prev,
            [subjectId]: !prev[subjectId],
        }));
    };

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col bg-[#0f1319]">
                <NavBarFront />
                <main className="flex-grow flex items-center justify-center px-4 py-16 relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute -inset-[10px] opacity-50"
                            style={{
                                background:
                                    "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
                            }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="relative z-10"
                    >
                        <FaClock className="text-4xl text-indigo-400" />
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    if (error || !course) {
        return (
            <div className="min-h-screen flex flex-col bg-[#0f1319]">
                <NavBarFront />
                <main className="flex-grow flex items-center justify-center px-4 py-16 relative overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute -inset-[10px] opacity-50"
                            style={{
                                background:
                                    "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
                            }}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 text-center space-y-8"
                    >
                        <FaBook className="text-6xl text-indigo-400" />
                        <h1 className="text-4xl md:text-6xl font-bold">
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
                                {courseName} Course
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto px-4">
                            {error || "This course is coming soon. Stay tuned for updates!"}
                        </p>
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full mx-auto max-w-md"
                        />
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -100, 0],
                                    opacity: [0, 1, 0],
                                }}
                                transition={{
                                    duration: 5 + i * 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: i * 2,
                                }}
                            />
                        ))}
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#0f1319]">
            <NavBarFront />
            <main className="flex-grow px-4 py-16 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -inset-[10px] opacity-50"
                        style={{
                            background:
                                "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
                        }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12 text-center sm:text-left"
                    >
                        <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 mb-4">
                            {course.skillBasedCourseDetails.courseName}
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl">
                            Explore the subjects and enhance your learning journey in {course.skillBasedCourseDetails.courseName}.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        {course.skillBasedCourseDetails.subjects.map((subject, index) => (
                            <motion.div
                                key={subject._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-[#1e293b]/50 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.1)]"
                            >
                                <button
                                    onClick={() => toggleSubject(subject._id)}
                                    className="w-full px-6 py-4 flex items-center justify-between group"
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                                            <FaBook className="text-2xl text-indigo-400" />
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-lg font-semibold text-gray-200 group-hover:text-indigo-400 transition-colors">
                                                {subject.name} 
                                            </h3>
                                            <p className="text-sm text-gray-400">{subject.problems.length} modules</p>
                                        </div>
                                    </div>
                                    <motion.div animate={{ rotate: isOpen[subject._id] ? 90 : 0 }} transition={{ duration: 0.2 }}>
                                        <RiArrowRightSLine className="text-2xl text-gray-400" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {isOpen[subject._id] && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-gray-700/50"
                                        >
                                            <div className="p-4 space-y-2">
                                                {subject.problems.map((problem, index) => (
                                                    <motion.div
                                                        key={problem._id}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.05 }}
                                                        className="flex items-center p-3 rounded-xl hover:bg-indigo-500/10 transition-all duration-200 sm:flex-row flex-col sm:items-center items-start gap-2"
                                                    >
                                                        <div className="flex-1">
                                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-500/10 text-indigo-400">
                                                                {problem.module}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-4 sm:w-auto w-full">
                                                            <a
                                                                href={problem.notes}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors"
                                                            >
                                                                <RiArticleLine className="text-indigo-400" />
                                                                <span className="text-sm text-gray-300">Notes</span>
                                                            </a>
                                                            <a
                                                                href={problem.video}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors"
                                                            >
                                                                <RiYoutubeLine className="text-red-400" />
                                                                <span className="text-sm text-gray-300">Video</span>
                                                            </a>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: i * 2,
                        }}
                    />
                ))}
            </main>
            <Footer />
        </div>
    );
};

export default SkillCourseSheet;