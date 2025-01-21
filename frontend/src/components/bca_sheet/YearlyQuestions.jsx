import React, { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { FaDownload, FaEye, FaBookmark, FaExternalLinkAlt, FaSearch, FaFilter } from "react-icons/fa"

import { semesterData } from "../../static_data/YearlyQuestionsData"
const PageContainer = styled(motion.div)`
    min-height: 100vh;
    background: linear-gradient(to bottom right, #0f172a, #1e293b);
    padding: 2rem 1rem;
    
    @media (min-width: 640px) {
        padding: 2rem;
    }
`

const Card = styled(motion.div)`
    background: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    transition: all 0.3s ease;
    
    &:hover {
        border-color: rgba(96, 165, 250, 0.3);
        transform: translateY(-2px);
    }
`

const SemesterButton = styled(motion.button)`
    background: ${(props) => (props.$isActive ? "linear-gradient(135deg, #3B82F6, #60A5FA)" : "rgba(30, 41, 59, 0.5)")};
    backdrop-filter: blur(10px);
    border: 1px solid ${(props) => (props.$isActive ? "rgba(96, 165, 250, 0.5)" : "rgba(255, 255, 255, 0.1)")};
    border-radius: 0.75rem;
    padding: 0.75rem;
    color: ${(props) => (props.$isActive ? "#ffffff" : "#94a3b8")};
    transition: all 0.2s ease;
    
    &:hover {
        background: ${(props) =>
        props.$isActive ? "linear-gradient(135deg, #3B82F6, #60A5FA)" : "rgba(59, 130, 246, 0.2)"};
        color: #ffffff;
    }
`

const SearchBar = styled.div`
    position: relative;
    margin-bottom: 2rem;
    
    input {
        width: 100%;
        padding: 0.75rem 1rem 0.75rem 2.5rem;
        background: rgba(30, 41, 59, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 0.75rem;
        color: #ffffff;
        transition: all 0.2s ease;
        
        &:focus {
            outline: none;
            border-color: rgba(96, 165, 250, 0.5);
            box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
        }
    }
    
    svg {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        color: #64748b;
    }
`

const FilterButton = styled(motion.button)`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    color: #94a3b8;
    transition: all 0.2s ease;
    
    &:hover {
        background: rgba(59, 130, 246, 0.2);
        color: #ffffff;
    }
`

function YearlyQuestions() {
    const [activeSemester, setActiveSemester] = useState(1)
    const [searchQuery, setSearchQuery] = useState("")
    const [bookmarkedPapers, setBookmarkedPapers] = useState(new Set())

    const toggleBookmark = (paperName) => {
        setBookmarkedPapers((prev) => {
            const newSet = new Set(prev)
            if (newSet.has(paperName)) {
                newSet.delete(paperName)
            } else {
                newSet.add(paperName)
            }
            return newSet
        })
    }

    const filteredPapers = useMemo(() => {
        const activeSemesterData = semesterData.find((sem) => sem.semester === activeSemester)
        if (!activeSemesterData) return []
        return activeSemesterData.papers.filter((paper) => paper.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [activeSemester, searchQuery])

    const totalPapers = useMemo(() => {
        return semesterData.reduce((total, semester) => total + semester.papers.length, 0)
    }, [])

    const totalDownloads = useMemo(() => {
        return semesterData.reduce((total, semester) => {
            return total + semester.papers.reduce((semTotal, paper) => semTotal + paper.downloads, 0)
        }, 0)
    }, [])

    const totalViews = useMemo(() => {
        return semesterData.reduce((total, semester) => {
            return total + semester.papers.reduce((semTotal, paper) => semTotal + paper.views, 0)
        }, 0)
    }, [])

    return (
        <PageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-4">
                        BCA Yearly Questions
                    </h1>
                    <p className="text-gray-400 max-w-2xl">
                        Access previous year question papers and enhance your exam preparation.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-grow">
                        <SearchBar>
                            <FaSearch />
                            <input
                                type="text"
                                placeholder="Search papers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </SearchBar>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 w-full">
                                {semesterData.map((semester) => (
                                    <SemesterButton
                                        key={semester.semester}
                                        $isActive={activeSemester === semester.semester}
                                        onClick={() => setActiveSemester(semester.semester)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Sem {semester.semester}
                                    </SemesterButton>
                                ))}
                            </div>
                        </div>

                        {/* <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-200">Semester {activeSemester} Papers</h2>
                            <FilterButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <FaFilter />
                                <span>Filter</span>
                            </FilterButton>
                        </div> */}

                        <div className="grid gap-4">
                            <AnimatePresence>
                                {filteredPapers.map((paper, index) => (
                                    <Card
                                        key={`${paper.name}-${paper.year}`}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <div className="p-4 sm:p-6">
                                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                                                <h3 className="text-lg font-medium text-gray-200">{paper.name}</h3>
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400">
                                                    {paper.year}
                                                </span>
                                            </div>

                                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                                <div className="flex gap-6 text-gray-400">
                                                    <span className="flex items-center gap-2">
                                                        <FaDownload size={14} />
                                                        <span>{paper.downloads}</span>
                                                    </span>
                                                    <span className="flex items-center gap-2">
                                                        <FaEye size={14} />
                                                        <span>{paper.views}</span>
                                                    </span>
                                                </div>
                                                <div className="flex gap-4">
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        onClick={() => toggleBookmark(paper.name)}
                                                        className={`${bookmarkedPapers.has(paper.name) ? "text-blue-400" : "text-gray-400 hover:text-blue-400"
                                                            }`}
                                                    >
                                                        <FaBookmark size={16} />
                                                    </motion.button>
                                                    <motion.a
                                                        href={paper.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="text-blue-400 hover:text-blue-300"
                                                    >
                                                        <FaExternalLinkAlt size={16} />
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* <div className="w-full lg:w-80">
                        <Card className="sticky top-4 p-6">
                            <h3 className="text-xl font-semibold text-blue-400 mb-6">Quick Stats</h3>
                            <div className="space-y-4">
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <div className="text-gray-400 mb-1">Total Papers</div>
                                    <div className="text-3xl font-bold text-white">{totalPapers}</div>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <div className="text-gray-400 mb-1">Downloads</div>
                                    <div className="text-3xl font-bold text-white">{totalDownloads}</div>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <div className="text-gray-400 mb-1">Views</div>
                                    <div className="text-3xl font-bold text-white">{totalViews}</div>
                                </div>
                            </div>
                        </Card>
                    </div> */}
                </div>
            </div>
        </PageContainer>
    )
}

export default YearlyQuestions

