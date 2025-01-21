import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaUser, FaEnvelope, FaGraduationCap, FaClock, FaCheckCircle, FaExclamationCircle, FaEdit, FaSignOutAlt } from "react-icons/fa"
import useLoggedIn from "../hooks/useLoggedIn"
import NavBarFront from "../components/NavBarFront"
import Footer from "../components/Footer"

const InputField = ({ label, icon, value, onChange, name, type = "text", disabled = false }) => (
    <div className="form-control w-full">
        <label className="label">
            <span className="label-text text-gray-400 flex items-center gap-2 text-sm">
                {icon}
                {label}
            </span>
        </label>
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className="input w-full bg-[#1a1f2e] text-gray-200 border-gray-700/50 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200 text-sm placeholder:text-gray-600"
        />
    </div>
)

const Profile = () => {
    const { user, logout } = useLoggedIn()
    const [isEditing, setIsEditing] = useState(false)
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        selectedCourse: "",
        lastLogin: null,
        isVerified: false,
    })

    useEffect(() => {
        if (user) {
            setUserData({
                name: user.name || "",
                email: user.email || "",
                selectedCourse: user.selectedCourse?.courseName || "Not selected",
                lastLogin: user.lastLogin ? new Date(user.lastLogin) : null,
                isVerified: user.isVerified || false,
            })
        }
    }, [user])

    const handleEdit = () => {
        setIsEditing(!isEditing)
    }

    const handleSave = () => {
        setIsEditing(false)
        console.log("Saving user data:", userData)
    }

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const formatLastLogin = (lastLogin) => {
        if (!lastLogin) return "Not available"

        const now = new Date()
        const diffInSeconds = Math.floor((now - lastLogin) / 1000)

        const seconds = diffInSeconds % 60
        const minutes = Math.floor(diffInSeconds / 60) % 60
        const hours = Math.floor(diffInSeconds / 3600) % 24
        const days = Math.floor(diffInSeconds / (3600 * 24))

        if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`
        if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
        return `${seconds} second${seconds > 1 ? "s" : ""} ago`
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#0f1319]">
            <NavBarFront />

            <main className="flex-grow flex items-center justify-center px-4 py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="w-full max-w-3xl"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text"
                    >
                        Your Profile
                    </motion.h1>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key="profile-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="bg-[#151921] rounded-2xl shadow-xl overflow-hidden border border-gray-800/50"
                        >
                            <div className="p-6 md:p-8 space-y-8">
                                <div className="flex items-center justify-between flex-wrap gap-4">
                                    <h2 className="text-2xl font-bold text-indigo-400">Personal Information</h2>
                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-opacity-10 border border-gray-700/50">
                                        {userData.isVerified ? (
                                            <>
                                                <FaCheckCircle className="text-green-400" />
                                                <span className="text-green-400 text-sm font-medium">Verified</span>
                                            </>
                                        ) : (
                                            <>
                                                <FaExclamationCircle className="text-yellow-400" />
                                                <span className="text-yellow-400 text-sm font-medium">Not Verified</span>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <InputField
                                        label="Name"
                                        icon={<FaUser className="text-indigo-400" />}
                                        value={userData.name}
                                        onChange={handleChange}
                                        name="name"
                                        disabled={!isEditing}
                                    />
                                    <InputField
                                        label="Email"
                                        icon={<FaEnvelope className="text-indigo-400" />}
                                        value={userData.email}
                                        onChange={handleChange}
                                        name="email"
                                        type="email"
                                        disabled={!isEditing}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-indigo-400 flex items-center gap-2">
                                        <FaGraduationCap />
                                        Academic Information
                                    </h3>
                                    <InputField
                                        label="Selected Course"
                                        icon={<FaGraduationCap className="text-indigo-400" />}
                                        value={userData.selectedCourse}
                                        disabled={true}
                                    />
                                </div>

                                <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-800/30 px-4 py-3 rounded-lg">
                                    <FaClock className="text-indigo-400" />
                                    <span>Last Login: {formatLastLogin(userData.lastLogin)}</span>
                                </div>
                            </div>

                            <div className="px-6 md:px-8 py-4 bg-[#1a1f2e] border-t border-gray-800/50 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full sm:w-auto px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium transition-colors duration-200 ${isEditing
                                        ? "bg-green-500/10 text-green-400 hover:bg-green-500/20"
                                        : "bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20"
                                        }`}
                                    onClick={isEditing ? handleSave : handleEdit}
                                >
                                    {isEditing ? (
                                        <>Save Changes</>
                                    ) : (
                                        <>
                                            <FaEdit /> Edit Profile
                                        </>
                                    )}
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto px-6 py-2.5 rounded-lg flex items-center justify-center gap-2 font-medium bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors duration-200"
                                    onClick={logout}
                                >
                                    <FaSignOutAlt /> Logout
                                </motion.button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </main>

            <Footer />
        </div>
    )
}

export default Profile
