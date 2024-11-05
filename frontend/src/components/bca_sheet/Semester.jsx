import React, { useState, useEffect } from 'react';
import { RiArticleLine, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { GrYoutube } from "react-icons/gr";
import { SiLeetcode } from 'react-icons/si';
import { Link } from 'react-router-dom';
import axios from "axios";

export const Semester = ({ sem }) => {
    const [isOpen, setIsOpen] = useState({});
    const [courseData, setCourseData] = useState(null);
    const [error, setError] = useState(null);

    const toggleDropdown = (section) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    useEffect(() => {
        axios.get('http://localhost:3000/api/course/')
            .then((res) => {
                console.log('API Response:', res.data); // Log the entire response
                if (res.data && res.data.data && Array.isArray(res.data.data)) {
                    const bcaCourse = res.data.data.find(course => course.courseName === "BCA");
                    if (bcaCourse) {
                        setCourseData(bcaCourse);
                    } else {
                        setError("BCA course not found in the data");
                    }
                } else {
                    setError("Unexpected API response structure");
                }
            })
            .catch(error => {
                console.error("Error fetching course data:", error);
                setError("Failed to fetch course data");
            });
    }, []);

    if (error) {
        return <div className="text-white">Error: {error}</div>;
    }

    if (!courseData) {
        return <div className="text-white">Loading...</div>;
    }

    const currentSemester = courseData.semesters.find(semester => semester.semesterNumber === sem);

    if (!currentSemester) {
        return <div className="text-white">Semester {sem} not found</div>;
    }

    return (
        <div className="bg-gray-900 p-8 pt-16 min-h-screen w-full lg:w-[80vw] relative">
            <div className="mx-auto w-full">
                <h1 className="mb-4 text-4xl font-bold text-white">Semester {sem}</h1>
                <p className="mb-14 text-lg text-gray-400">
                    Explore the subjects and problems for this semester in the BCA program.
                </p>

                {currentSemester.subjects.map((subject) => (
                    <div key={subject._id} className="mb-6">
                        <button
                            onClick={() => toggleDropdown(subject._id)}
                            className="flex w-full items-center justify-between rounded-xl border border-gray-800 bg-gray-800 px-6 py-4 transition-all hover:bg-gray-700"
                        >
                            <span className="text-lg font-semibold text-gray-200">{subject.name}</span>
                            <span className="text-gray-400">
                                {isOpen[subject._id] ? <RiArrowDropUpLine size={24} /> : <RiArrowDropDownLine size={24} />}
                            </span>
                        </button>

                        {isOpen[subject._id] && (
                            <div className="mt-4 overflow-hidden rounded-xl border border-gray-800 bg-gray-800 p-4">
                                <table className="w-full table-auto border-collapse text-gray-300">
                                    <thead>
                                        <tr className="border-b border-gray-700">
                                            <th className="p-3 text-center">Status</th>
                                            <th className="p-3 text-center">Problem</th>
                                            <th className="p-3 text-center">Difficulty</th>
                                            <th className="p-3 text-center">Article</th>
                                            <th className="p-3 text-center">Video</th>
                                            <th className="p-3 text-center">Practice</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {subject.problems.map((problem) => (
                                            <tr key={problem._id} className="hover:bg-gray-700 transition-colors">
                                                <td className='p-3 flex justify-center'>
                                                    <input type="checkbox" checked={problem.status} className="checkbox checkbox-primary mt-1" readOnly />
                                                </td>
                                                <td className="p-3">
                                                    <div className="flex items-center justify-center">
                                                        {problem.problem}
                                                    </div>
                                                </td>
                                                <td className="p-3 text-center">
                                                    {problem.difficulty ? problem.difficulty : 'N/A'}
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