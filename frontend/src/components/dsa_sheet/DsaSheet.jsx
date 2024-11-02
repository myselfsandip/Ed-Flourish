import  { useState } from 'react';
import { RiArticleLine, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { GrYoutube } from "react-icons/gr";
import { SiLeetcode } from 'react-icons/si';
import { topicsData } from '../../assets/data.js';
import { Link } from 'react-router-dom';

const DsaSheet = () => {
    const [isOpen, setIsOpen] = useState({});

    const toggleDropdown = (section) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <div className="bg-gray-900 p-8 pt-16 min-h-screen w-full lg:w-[80vw] relative">
            <div className="mx-auto w-full">
                <h1 className="mb-4 text-4xl font-bold text-white">DSA</h1>
                <p className="mb-8 text-lg text-gray-400">
                    Blind 75 leetcode is a list of carefully curated coding questions that have helped developers succeed in interviews at top tech companies.
                </p>

                {/* Improved Progress Display */}
                <div className="mb-12 rounded-xl border border-gray-800 bg-gray-800 p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white">Your Progress</h3>
                        <span className="text-gray-400">1% complete</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-gray-700">
                        <div className="h-2.5 w-[1%] rounded-full bg-blue-500"></div>
                    </div>
                    <p className="mt-2 text-gray-400">1 of 75 problems completed</p>
                </div>

                {/* Main Content */}

                {/* Topic Sections */}
                {topicsData.map((topic) => (
                    <div key={topic.id} className="mb-6">
                        <button
                            onClick={() => toggleDropdown(topic.id)}
                            className="flex w-full items-center justify-between rounded-xl border border-gray-800 bg-gray-800 px-6 py-4 transition-all hover:bg-gray-700"
                        >
                            <span className="text-lg font-semibold text-gray-200">{topic.day}</span>
                            <span className="text-gray-400">
                                {isOpen[topic.id] ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
                            </span>
                        </button>

                        {isOpen[topic.id] && (
                            <div className="mt-4 overflow-hidden rounded-xl border border-gray-800 bg-gray-800 p-4">
                                <table className="w-full table-auto border-collapse text-gray-300">
                                    <thead>
                                        <tr className="border-b border-gray-700">
                                            <th className="p-3 text-center">Status</th>
                                            <th className="p-3 text-center">Problem</th>
                                            <th className="p-3 text-center">Article</th>
                                            <th className="p-3 text-center">Video</th>
                                            <th className="p-3 text-center">Practice</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {topic.problems.map((problem, index) => (
                                            <tr key={index} className="hover:bg-gray-700 transition-colors">
                                                <td className='p-3 flex justify-center'><input type="checkbox" defaultChecked className="checkbox checkbox-primary mt-1" /></td>

                                                <td className="p-3">
                                                    <div className="flex items-center justify-center">

                                                        {problem.problem}
                                                    </div>
                                                </td>

                                                <td className="p-3 ">
                                                    <Link to={problem.article} className="rounded-lg p-2 transition-all hover:bg-gray-700 flex justify-center items-center">
                                                        <RiArticleLine className="text-xl text-white" />
                                                    </Link>
                                                </td>
                                                <td className="p-3">
                                                    <Link to={problem.video} className="rounded-lg p-2 transition-all hover:bg-gray-700 flex justify-center items-center">
                                                        <GrYoutube className='text-xl text-red-600 ' />
                                                    </Link>
                                                </td>
                                                <td className="p-3 ">
                                                    <Link to="https://leetcode.com" className="rounded-lg p-2 transition-all hover:bg-gray-700 flex justify-center items-center">
                                                        <SiLeetcode className="text-xl text-yellow-500" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


export default DsaSheet;