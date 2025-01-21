import React from "react"
import { motion } from "framer-motion"
import { FaClock, FaRocket } from "react-icons/fa"
import NavBarFront from "../components/NavBarFront"
import Footer from "../components/Footer"

const ComingSoon = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0f1319]">
            <NavBarFront />

            <main className="flex-grow flex items-center justify-center px-4 py-16 relative overflow-hidden mt-16">
                {/* Background Animation */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute -inset-[10px] opacity-50"
                        style={{
                            background: "radial-gradient(circle at center, rgba(99, 102, 241, 0.15) 0%, transparent 70%)",
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                        }}
                    />
                </div>

                <div className="relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center space-y-8"
                    >
                        {/* Rocket Animation */}
                        <motion.div
                            animate={{
                                y: [-10, 10, -10],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "easeInOut",
                            }}
                            className="inline-block"
                        >
                            <FaRocket className="text-6xl md:text-7xl text-indigo-400 transform -rotate-45" />
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-6xl font-bold"
                        >
                            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
                                Coming Soon
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto px-4"
                        >
                            We're working hard to bring you something amazing. Stay tuned for updates!
                        </motion.p>

                        {/* Status Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9 }}
                            className="flex items-center justify-center gap-3 text-indigo-400"
                        >
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            >
                                <FaClock className="text-xl" />
                            </motion.div>
                            <span className="text-sm font-medium">Under Construction</span>
                        </motion.div>

                        {/* Decorative Elements */}
                        <div className="relative">
                            <motion.div
                                className="absolute left-1/2 -translate-x-1/2 -top-4 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: "60%" }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                            className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 rounded-full mx-auto max-w-md"
                        />
                    </motion.div>
                </div>

                {/* Floating Particles */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-indigo-400/30 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 5 + i * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: i * 2,
                        }}
                    />
                ))}
            </main>

            <Footer />
        </div>
    )
}

export default ComingSoon

