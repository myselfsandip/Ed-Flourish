import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import styled from "styled-components"
import { FaRegUserCircle, FaGraduationCap, FaBook, FaClipboardList, FaTimes, FaChartLine } from "react-icons/fa"
import { IoMdSettings } from "react-icons/io"
import { RiSearchLine } from "react-icons/ri"

const SidebarContainer = styled(motion.aside)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: ${(props) => props.$width};
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 30;
  overflow-y: auto;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
  }
`

const NavItem = styled(motion.div)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 3px;
    height: 0;
    background: #3B82F6;
    transition: height 0.2s ease;
  }
  
  &.active::before {
    height: 60%;
  }
`

const sidebarVariants = {
    open: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
    closed: {
        x: "-100%",
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 30,
        },
    },
}

export const Sidebar = ({ isOpen, setIsOpen, width, isMobile }) => {
    const [isBCADropdownOpen, setBCADropdownOpen] = useState(true)
    const location = useLocation()

    const isActive = (path) => location.pathname === path

    return (
        <SidebarContainer
            $width={width}
            initial={isMobile ? "closed" : "open"}
            animate="open"
            exit="closed"
            variants={sidebarVariants}
        >
            <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <Link to="/" className="flex items-center gap-3">
                        <motion.div
                            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="text-white font-bold text-xl">Ed</span>
                        </motion.div>
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                            BCA Portal
                        </h2>
                    </Link>

                    {isMobile && (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(false)}
                            className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-gray-200"
                        >
                            <FaTimes className="text-xl" />
                        </motion.button>
                    )}
                </div>

                {/* Search */}
                <div className="relative mb-8">
                    <RiSearchLine className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gray-800/50 text-gray-300 rounded-xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                    />
                </div>

                {/* Navigation */}
                <nav className="space-y-2 flex-1">
                    <NavItem className={`${isActive("/bca/dashboard") ? "active" : ""}`}>
                        <Link
                            to="/bca/dashboard"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
                        >
                            <FaChartLine className="text-xl text-gray-400" />
                            <span className="text-gray-300">Dashboard</span>
                        </Link>
                    </NavItem>

                    {/* BCA Dropdown */}
                    <div className="space-y-1">
                        <button
                            onClick={() => setBCADropdownOpen(!isBCADropdownOpen)}
                            className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <FaGraduationCap className="text-xl text-gray-400" />
                                <span className="text-gray-300">BCA</span>
                            </div>
                            <motion.svg
                                className="w-5 h-5 text-gray-400"
                                animate={{ rotate: isBCADropdownOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </motion.svg>
                        </button>

                        <AnimatePresence>
                            {isBCADropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="pl-12 space-y-1"
                                >
                                    {[1, 2, 3, 4].map((sem) => (
                                        <NavItem key={sem} className={`${isActive(`/bca/sem${sem}`) ? "active" : ""}`}>
                                            <Link
                                                to={`/bca/sem${sem}`}
                                                className="block px-4 py-2 rounded-xl hover:bg-blue-500/10 transition-colors text-gray-300"
                                            >
                                                Semester {sem}
                                            </Link>
                                        </NavItem>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <NavItem className={`${isActive("/bca/yearly_questions") ? "active" : ""}`}>
                        <Link
                            to="/bca/yearly_questions"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
                        >
                            <FaBook className="text-xl text-gray-400" />
                            <span className="text-gray-300">Yearly Questions</span>
                        </Link>
                    </NavItem>

                    <NavItem className={`${isActive("/bca/mock_test") ? "active" : ""}`}>
                        <Link
                            to="/bca/mock_test"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
                        >
                            <FaClipboardList className="text-xl text-gray-400" />
                            <span className="text-gray-300">Mock Test</span>
                        </Link>
                    </NavItem>

                    <NavItem className={`${isActive("/bca/settings") ? "active" : ""}`}>
                        <Link
                            to="/bca/settings"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-500/10 transition-colors"
                        >
                            <IoMdSettings className="text-xl text-gray-400" />
                            <span className="text-gray-300">Settings</span>
                        </Link>
                    </NavItem>
                </nav>

                {/* User Profile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-auto pt-6 border-t border-gray-800"
                >
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/50">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                            <span className="text-white font-medium">JD</span>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-gray-200">John Doe</h4>
                            <p className="text-xs text-gray-400">Student</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SidebarContainer>
    )
}
