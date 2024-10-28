import React, { useState } from 'react';
import { FaDownload, FaEye, FaBookmark, FaExternalLinkAlt } from 'react-icons/fa';

const semesterData = [
    {
        semester: 1,
        papers: [
            { name: 'DIGITAL ELECTRONICS BCAC101', year: 2024, downloads: 234, views: 1205 },
            { name: 'PROGRAMMING FOR PROBLEM SOLVING THROUGH C BCAC102', year: 2024, downloads: 189, views: 982 },
            { name: 'DIGITAL ELECTRONICS BCAC102', year: 2023, downloads: 567, views: 2341 },
            { name: 'PROGRAMMING FOR PROBLEM SOLVING BCAC101', year: 2023, downloads: 432, views: 1876 },
        ]
    },
    // ... other semester data
];

function YearlyQuestions() {
    const [activeSemester, setActiveSemester] = useState(1);

    return (
        <div className="min-h-screen bg-gray-900 p-6 w-full lg:w-[78vw]">
            <h2 className="text-4xl font-bold mb-8 text-white text-center sm:text-left">BCA Yearly Questions</h2>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-grow w-full md:w-3/4">
                    {/* Semester Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                        {[1, 2, 3, 4, 5, 6].map((semester) => (
                            <button
                                key={semester}
                                className={`py-3 px-6 rounded-lg text-center transition-colors ${
                                    activeSemester === semester
                                        ? 'bg-blue-600 text-white' 
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-blue-600/50'
                                }`}
                                onClick={() => setActiveSemester(semester)}
                            >
                                {semester} SEMESTER
                            </button>
                        ))}
                    </div>

                    {/* Papers Section */}
                    <div className="bg-gray-800/50 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                            BCA {activeSemester} SEMESTER PAPERS
                        </h3>
                        <div className="space-y-3">
                            {semesterData[0].papers.map((paper, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gray-800/80 rounded-lg p-4 hover:bg-gray-700/80 transition-colors"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-gray-200 font-medium">{paper.name}</span>
                                        <span className="text-blue-400">{paper.year}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
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
                                        <div className="flex gap-3">
                                            <button className="text-gray-400 hover:text-blue-400">
                                                <FaBookmark size={16} />
                                            </button>
                                            <button className="text-blue-400 hover:text-blue-300">
                                                <FaExternalLinkAlt size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Sidebar */}
                <div className="w-full md:w-1/4">
                    <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Quick Stats</h3>
                        <div className="space-y-4">
                            <div className="bg-gray-800/80 rounded-lg p-4">
                                <div className="text-gray-400 mb-1">Total Papers</div>
                                <div className="text-3xl font-bold text-white">48</div>
                            </div>
                            <div className="bg-gray-800/80 rounded-lg p-4">
                                <div className="text-gray-400 mb-1">Total Downloads</div>
                                <div className="text-3xl font-bold text-white">2,524</div>
                            </div>
                            <div className="bg-gray-800/80 rounded-lg p-4">
                                <div className="text-gray-400 mb-1">Total Views</div>
                                <div className="text-3xl font-bold text-white">11,218</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-400">Recent Activity</h3>
                        <div className="space-y-4">
                            <div className="border-l-2 border-blue-500 pl-4">
                                <div className="text-gray-200">New paper added to Semester 1</div>
                                <div className="text-sm text-gray-400">2 hours ago</div>
                            </div>
                            <div className="border-l-2 border-blue-500 pl-4">
                                <div className="text-gray-200">Updated BCAC102 2024 paper</div>
                                <div className="text-sm text-gray-400">5 hours ago</div>
                            </div>
                            <div className="border-l-2 border-blue-500 pl-4">
                                <div className="text-gray-200">Added solutions for BCAC101</div>
                                <div className="text-sm text-gray-400">1 day ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default YearlyQuestions;
