import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { FaDownload, FaEye, FaBookmark, FaExternalLinkAlt, FaSearch, FaFilter } from "react-icons/fa"

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

const semesterData = [
    {
        semester: 1,
        papers: [
            { name: "DIGITAL ELECTRONICS BCAC101", year: 2024, downloads: 234, views: 1205 },
            { name: "PROGRAMMING FOR PROBLEM SOLVING THROUGH C BCAC102", year: 2024, downloads: 189, views: 982 },
            { name: "DIGITAL ELECTRONICS BCAC102", year: 2023, downloads: 567, views: 2341 },
            { name: "PROGRAMMING FOR PROBLEM SOLVING BCAC101", year: 2023, downloads: 432, views: 1876 },
        ],
    },
]

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

    const filteredPapers = semesterData[0].papers.filter((paper) =>
        paper.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )

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
                                {[1, 2, 3, 4, 5, 6].map((semester) => (
                                    <SemesterButton
                                        key={semester}
                                        $isActive={activeSemester === semester}
                                        onClick={() => setActiveSemester(semester)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Sem {semester}
                                    </SemesterButton>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-200">Semester {activeSemester} Papers</h2>
                            <FilterButton whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <FaFilter />
                                <span>Filter</span>
                            </FilterButton>
                        </div>

                        <div className="grid gap-4">
                            <AnimatePresence>
                                {filteredPapers.map((paper, index) => (
                                    <Card
                                        key={index}
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
                                                    <motion.button
                                                        whileHover={{ scale: 1.1 }}
                                                        whileTap={{ scale: 0.9 }}
                                                        className="text-blue-400 hover:text-blue-300"
                                                    >
                                                        <FaExternalLinkAlt size={16} />
                                                    </motion.button>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="w-full lg:w-80">
                        <Card className="sticky top-4 p-6">
                            <h3 className="text-xl font-semibold text-blue-400 mb-6">Quick Stats</h3>
                            <div className="space-y-4">
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <div className="text-gray-400 mb-1">Total Papers</div>
                                    <div className="text-3xl font-bold text-white">48</div>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <div className="text-gray-400 mb-1">Downloads</div>
                                    <div className="text-3xl font-bold text-white">2,524</div>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <div className="text-gray-400 mb-1">Views</div>
                                    <div className="text-3xl font-bold text-white">11,218</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </PageContainer>
    )
}

export default YearlyQuestions

