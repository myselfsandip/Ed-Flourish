import { motion } from "framer-motion"
import { FaRobot } from "react-icons/fa"
import { FaUser } from "react-icons/fa"

const ChatMessage = ({ message }) => {
    const { text, isBot } = message

    return (
        <motion.div
            className={`flex mb-5 ${isBot ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className={`flex ${isBot ? "flex-row" : "flex-row-reverse"} max-w-[80%] items-end gap-3`}>
                <div
                    className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${isBot ? "bg-indigo-100/70 text-indigo-600 backdrop-blur-sm" : "bg-purple-100/70 text-purple-600 backdrop-blur-sm"}`}
                >
                    {isBot ? <FaRobot size={18} /> : <FaUser size={18} />}
                </div>
                <div className={`py-3 px-5 rounded-xl shadow-sm ${isBot ? "bg-white/70 border border-gray-100/50 backdrop-blur-sm text-gray-800" : "bg-gradient-to-r from-indigo-500 to-purple-600 text-white"}`}>
                    <p className="text-sm leading-relaxed">{text}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ChatMessage