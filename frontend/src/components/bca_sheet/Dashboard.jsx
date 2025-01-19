import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FaBook, FaClipboardList, FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageContainer = styled(motion.div)`
    min-height: 100vh;
    background: linear-gradient(to bottom right, #0f172a, #1e293b);
    padding: 2rem 1rem;

    @media (min-width: 640px) {
        padding: 2rem;
    }
`;

const Card = styled(motion.div)`
    background: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 1.5rem;
    height: 100%;
`;

const StatCard = styled(Link)`
    background: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 1.5rem;
    height: 100%;
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-4px);
        border-color: rgba(96, 165, 250, 0.3);
    }
`;

const IconWrapper = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: rgba(59, 130, 246, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    svg {
        font-size: 24px;
        color: #60A5FA;
    }
`;

function Dashboard() {
    return (
        <PageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="max-w-7xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-white mb-8"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Dashboard
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                        <StatCard to="/bca/yearly_questions" className="flex flex-col items-center text-center">
                            <IconWrapper>
                                <FaBook />
                            </IconWrapper>
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Yearly Questions</h2>
                            <p className="text-gray-400">Access previous year question papers</p>
                        </StatCard>
                    </motion.div>

                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                        <StatCard to="/bca/mock_test" className="flex flex-col items-center text-center">
                            <IconWrapper>
                                <FaClipboardList />
                            </IconWrapper>
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Mock Tests</h2>
                            <p className="text-gray-400">Practice with mock tests</p>
                        </StatCard>
                    </motion.div>

                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <StatCard to="/bca/sem1" className="flex flex-col items-center text-center">
                            <IconWrapper>
                                <FaGraduationCap />
                            </IconWrapper>
                            <h2 className="text-2xl font-semibold text-gray-200 mb-2">Current Semester</h2>
                            <p className="text-gray-400">View semester materials</p>
                        </StatCard>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
                        <Card>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Quick Access</h2>
                            <div className="space-y-4">
                                {[1, 2, 3, 4].map((sem) => (
                                    <Link
                                        key={sem}
                                        to={`/bca/sem${sem}`}
                                        className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                                    >
                                        <span className="text-gray-300">Semester {sem}</span>
                                        <span className="text-blue-400">View</span>
                                    </Link>
                                ))}
                            </div>
                        </Card>
                    </motion.div>

                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}>
                        <Card>
                            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Recent Activity</h2>
                            <div className="space-y-4">
                                <div className="flex items-center text-gray-300 p-4 rounded-lg bg-gray-800/50">
                                    <span className="w-3 h-3 rounded-full bg-green-500 mr-3"></span>
                                    Completed Mock Test
                                </div>
                                <div className="flex items-center text-gray-300 p-4 rounded-lg bg-gray-800/50">
                                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-3"></span>
                                    Viewed Yearly Questions
                                </div>
                                <div className="flex items-center text-gray-300 p-4 rounded-lg bg-gray-800/50">
                                    <span className="w-3 h-3 rounded-full bg-yellow-500 mr-3"></span>
                                    Started New Module
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </PageContainer>
    );
}

export default Dashboard;
