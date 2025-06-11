import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { RiArticleLine, RiBookmarkLine, RiCheckboxCircleLine, RiYoutubeLine, RiArrowRightSLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import axios from "axios"

const SubjectCard = styled(motion.div)`
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
        border-color: rgba(96, 165, 250, 0.5);
        box-shadow: 0 0 20px rgba(96, 165, 250, 0.1);
    }
`

const ModuleRow = styled(motion.div)`
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-radius: 12px;
    background: ${(props) => (props.$isHovered ? "rgba(96, 165, 250, 0.1)" : "transparent")};
    transition: all 0.2s ease;

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`

const ProgressBar = styled.div`
    width: 100%;
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: ${(props) => props.$progress}%;
        background: linear-gradient(90deg, #3B82F6, #60A5FA);
        border-radius: 3px;
        transition: width 0.3s ease;
    }
`

export const Semester = ({ sem }) => {
    const [isOpen, setIsOpen] = useState({})
    const [courseData, setCourseData] = useState(null)
    const [error, setError] = useState(null)
    const [hoveredRow, setHoveredRow] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_SERVER_URL}/api/course/`)
                if (res.data?.data) {
                    const bcaCourse = res.data.data.find((course) => course.collegeCourseDetails?.courseName === "BBA")
                    if (bcaCourse) {
                        setCourseData(bcaCourse.collegeCourseDetails)
                    } else {
                        setError("BCA course not found")
                    }
                } else {
                    setError("Invalid response structure")
                }
            } catch (error) {
                console.error("Error:", error)
                setError("Failed to fetch data")
            }
        }

        fetchData()
    }, [])

    if (error) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center min-h-[50vh]"
            >
                <div className="text-red-400 bg-red-400/10 px-4 py-2 rounded-lg">{error}</div>
            </motion.div>
        )
    }

    if (!courseData) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center min-h-[50vh]"
            >
                <div className="w-12 h-12 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin" />
            </motion.div>
        )
    }

    const currentSemester = courseData.semesters.find((semester) => semester.semesterNumber === sem)

    if (!currentSemester) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center min-h-[50vh]"
            >
                <div className="text-yellow-400 bg-yellow-400/10 px-4 py-2 rounded-lg">Semester {sem} not found</div>
            </motion.div>
        )
    }

    const toggleSubject = (subjectId) => {
        setIsOpen((prev) => ({
            ...prev,
            [subjectId]: !prev[subjectId],
        }))
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 text-center sm:text-left"
            >
                <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                    Semester {sem}
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl">
                    Explore the subjects and enhance your learning journey in the BCA program.
                </p>
            </motion.div>

            <div className="space-y-6">
                {currentSemester.subjects.map((subject, index) => (
                    <SubjectCard
                        key={subject._id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <button
                            onClick={() => toggleSubject(subject._id)}
                            className="w-full px-6 py-4 flex items-center justify-between group"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                    <RiBookmarkLine className="text-2xl text-blue-400" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">
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
                                            <ModuleRow
                                                key={problem._id}
                                                $isHovered={hoveredRow === index}
                                                onMouseEnter={() => setHoveredRow(index)}
                                                onMouseLeave={() => setHoveredRow(null)}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <div className="flex-1">
                                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400">
                                                        {problem.module}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-4 sm:w-auto w-full">
                                                    <Link
                                                        to={problem.notes}
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                                                    >
                                                        <RiArticleLine className="text-blue-400" />
                                                        <span className="text-sm text-gray-300">Notes</span>
                                                    </Link>
                                                    <Link
                                                        to={problem.video}
                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors"
                                                    >
                                                        <RiYoutubeLine className="text-red-400" />
                                                        <span className="text-sm text-gray-300">Video</span>
                                                    </Link>
                                                </div>
                                                {/* <div className="sm:w-1/4 w-full flex items-center gap-3">
                                                    <ProgressBar $progress={33} />
                                                    <RiCheckboxCircleLine className="text-gray-400" />
                                                </div> */}
                                            </ModuleRow>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </SubjectCard>
                ))}
            </div>
        </div>
    )
}

