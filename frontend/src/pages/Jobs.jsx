import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { FaBriefcase, FaMapMarkerAlt, FaArrowLeft, FaFilter, FaSpinner } from 'react-icons/fa';
import NavBarFront from '../components/NavBarFront';
import Footer from '../components/Footer';

// Mock data for fallback
const mockJobs = [
    {
        title: 'Remote Software Engineer',
        company_name: 'Tech Corp',
        location: 'India, Remote',
        description: 'Join our team to build cutting-edge applications remotely.',
        url: '#',
        remote: true,
    },
    {
        title: 'Frontend Developer',
        company_name: 'Innovate Tech',
        location: 'Mumbai, India',
        description: 'Develop user-friendly interfaces with React.',
        url: '#',
        remote: false,
    },
    {
        title: 'Remote Backend Developer',
        company_name: 'Code Solutions',
        location: 'India, Remote',
        description: 'Build scalable APIs and manage databases remotely.',
        url: '#',
        remote: true,
    },
    {
        title: 'Remote Full Stack Developer',
        company_name: 'Nexlify',
        location: 'India, Remote',
        description: 'Work on both frontend and backend technologies remotely.',
        url: '#',
        remote: true,
    },
    {
        title: 'DevOps Engineer',
        company_name: 'CloudNet',
        location: 'Pune, India',
        description: 'Optimize CI/CD pipelines and cloud infrastructure.',
        url: '#',
        remote: false,
    },
    {
        title: 'Remote Data Scientist',
        company_name: 'DataWorks',
        location: 'India, Remote',
        description: 'Analyze data and build machine learning models remotely.',
        url: '#',
        remote: true,
    },
    {
        title: 'UI/UX Designer',
        company_name: 'DesignPro',
        location: 'Gurgaon, India',
        description: 'Create intuitive and beautiful user interfaces.',
        url: '#',
        remote: false,
    },
    {
        title: 'Remote Mobile App Developer',
        company_name: 'AppCrafters',
        location: 'India, Remote',
        description: 'Develop cross-platform mobile applications remotely.',
        url: '#',
        remote: true,
    },
    {
        title: 'Cybersecurity Analyst',
        company_name: 'SecureTech',
        location: 'Noida, India',
        description: 'Protect systems from cyber threats.',
        url: '#',
        remote: false,
    },
];

const JobCard = ({ title, company, location, description, url, remote }) => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(59, 130, 246, 0.3)' }}
        className="relative bg-gradient-to-br from-[#1a1e24]/80 to-[#2a2e35]/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-gray-700/50"
    >
        <div className="p-6">
            <div className="flex items-center mb-4">
                <FaBriefcase className="text-blue-400 text-2xl mr-3" />
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
            <p className="text-gray-300 mb-2 flex items-center">
                <span className="font-semibold mr-1">Company:</span> {company}
            </p>
            <p className="text-gray-300 mb-4 flex items-center">
                <FaMapMarkerAlt className="text-purple-400 mr-2" />
                <span className="font-semibold mr-1">Location:</span> {location} {remote && <span className="text-green-400 ml-1">(Remote)</span>}
            </p>
            <p className="text-gray-400 mb-6 line-clamp-3">{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 px-6 text-white font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 shadow-lg transition-all duration-300"
                >
                    Apply Now
                </motion.button>
            </a>
        </div>
        {remote && (
            <div className="absolute top-4 right-4 bg-green-500/20 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                Remote
            </div>
        )}
    </motion.div>
);

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({ remote: true, location: 'india' });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchJobs = async () => {
            setIsLoading(true);
            const options = {
                method: 'GET',
                url: 'https://www.arbeitnow.com/api/job-board-api',
                params: {
                    page: page.toString(),
                    q: 'developer',
                    ...(filter.location && { location: filter.location }),
                    ...(filter.remote && { remote: 'true' }),
                },
            };

            try {
                const response = await axios.request(options);
                const jobData = response.data.data || [];
                setJobs(jobData);
                setError(null);
            } catch (error) {
                console.error('Error fetching jobs:', error);
                setError('Failed to load job listings. Please try again later.');
                setJobs(mockJobs.slice(0, 9)); // Fallback to mock data
            } finally {
                setIsLoading(false);
            }
        };

        fetchJobs();
    }, [page, filter]);

    const handleFilterToggle = (type) => {
        setFilter((prev) => ({
            ...prev,
            [type]: type === 'remote' ? !prev.remote : prev.remote,
            location: type === 'location' ? (prev.location ? '' : 'india') : prev.location,
        }));
        setPage(1); // Reset to page 1 on filter change
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-[#0f1319] to-[#1a1e24] min-h-screen flex flex-col"
        >
            <NavBarFront />
            <main className="flex-grow py-16" id='jobPage'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <motion.h1
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-5xl mt-7 md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-center mb-4"
                    >
                        Job Opportunities
                    </motion.h1>
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
                    >
                        Discover top developer roles in India or remotely to skyrocket your career
                    </motion.p>

                    {/* Filter Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex justify-center mb-8 gap-4"
                    >
                        <button
                            onClick={() => handleFilterToggle('remote')}
                            className={`flex items-center px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${filter.remote
                                ? 'bg-blue-600 text-white shadow-lg'
                                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
                                }`}
                        >
                            <FaFilter className="mr-2" />
                            Remote Jobs
                        </button>
                        <button
                            onClick={() => handleFilterToggle('location')}
                            className={`flex items-center px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${filter.location
                                ? 'bg-purple-600 text-white shadow-lg'
                                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600'
                                }`}
                        >
                            <FaMapMarkerAlt className="mr-2" />
                            India Jobs
                        </button>
                    </motion.div>

                    {/* Error Message */}
                    <AnimatePresence>
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-red-400 text-center mb-8 text-lg"
                            >
                                {error}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Job Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="col-span-full text-center text-gray-300 flex items-center justify-center h-64"
                                >
                                    <FaSpinner className="animate-spin text-4xl text-blue-400 mr-4" />
                                    Loading jobs...
                                </motion.div>
                            ) : jobs.length > 0 ? (
                                jobs.map((job, index) => (
                                    <JobCard
                                        key={`${job.title}-${index}`}
                                        title={job.title || 'Remote Developer'}
                                        company={job.company_name || 'Tech Corp'}
                                        location={job.location || 'India'}
                                        description={job.description || 'Join our team to build cutting-edge applications.'}
                                        url={job.url || '#'}
                                        remote={job.remote || false}
                                    />
                                ))
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="col-span-full text-center text-gray-300 text-lg"
                                >
                                    No jobs found. Try adjusting the filters.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Pagination */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-12 flex justify-center gap-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                            disabled={page === 1}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600/50 to-purple-600/50 backdrop-blur-md text-white font-semibold rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Previous
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setPage((prev) => prev + 1)}
                            className="px-6 py-3 bg-gradient-to-r from-blue-600/50 to-purple-600/50 backdrop-blur-md text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
                        >
                            Next
                        </motion.button>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </motion.div>
    );
};

export default Jobs;