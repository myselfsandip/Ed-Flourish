import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const semesterData = [
    {
        semester: 1,
        papers: [
            { name: 'DIGITAL ELECTRONICS BCAC101', year: 2024, link: '#' },
            { name: 'PROGRAMMING FOR PROBLEM SOLVING THROUGH C BCAC102', year: 2024, link: '#' },
            { name: 'DIGITAL ELECTRONICS BCAC102', year: 2023, link: '#' },
            { name: 'PROGRAMMING FOR PROBLEM SOLVING BCAC101', year: 2023, link: '#' },
        ]
    },
    {
        semester: 2,
        papers: [
            { name: 'DIGITAL ELECTRONICS BCAC101', year: 2024, link: '#' },
            { name: 'PROGRAMMING FOR PROBLEM SOLVING THROUGH C BCAC102', year: 2024, link: '#' },
            { name: 'DIGITAL ELECTRONICS BCAC102', year: 2023, link: '#' },
            { name: 'PROGRAMMING FOR PROBLEM SOLVING BCAC101', year: 2023, link: '#' },
        ]
    },
    // Add data for other semesters (2-6) here
];

function YearlyQuestions() {
    const [activeSemester, setActiveSemester] = useState(1);

    return (
        <div className="h-full bg-base-100 p-8 rounded-lg shadow-inner">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">BCA Yearly Questions</h2>

            <div className="mb-8 grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((semester) => (
                    <button
                        key={semester}
                        className={`py-2 px-4 rounded-lg text-center transition-colors ${activeSemester === semester
                                ? 'bg-primary text-primary-content'
                                : 'bg-base-200 text-base-content hover:bg-primary/20'
                            }`}
                        onClick={() => setActiveSemester(semester)}
                    >
                        {semester} SEMESTER
                    </button>
                ))}
            </div>

            <div className="bg-base-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                    BCA {activeSemester} SEMESTER PAPERS
                </h3>
                <ul className="space-y-2">
                    {semesterData.find(s => s.semester === activeSemester)?.papers.map((paper, index) => (
                        <li key={index}>
                            <a
                                href={paper.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-3 bg-base-300 rounded hover:bg-primary hover:text-primary-content transition-colors"
                            >
                                <span>{paper.name} - {paper.year}</span>
                                <FaExternalLinkAlt size={16} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default YearlyQuestions;