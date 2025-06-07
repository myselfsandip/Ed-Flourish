import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IoMdClose } from "react-icons/io"
import { FaRobot } from "react-icons/fa"
import { IoSend } from "react-icons/io5"
import ChatMessage from "./ChatMessage"
import axios from "axios"

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([{ id: 1, text: "Hi there! How can I help you today?", isBot: true }])
    const [inputValue, setInputValue] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const messagesEndRef = useRef(null)

    const API_URL = import.meta.env.VITE_API_SERVER_URL + '/api'

    const toggleChat = () => {
        setIsOpen(!isOpen)
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        const userMessage = { id: Date.now(), text: inputValue, isBot: false }
        setMessages((prev) => [...prev, userMessage])
        setInputValue("")
        setIsLoading(true)

        const messageToSend = userMessage.text

        try {
            const response = await axios.post(
                API_URL + '/chat',
                { message: messageToSend },
                {
                    withCredentials: true,
                    headers: { 'Content-Type': 'application/json' }
                }
            )

            const data = response.data
            if (data.success && data.response) {
                setMessages(prev => [...prev, { id: Date.now() + 1, text: data.response, isBot: true }])
            } else {
                console.error('API responded with success: false or missing response data:', data)
                setMessages(prev => [...prev, { id: Date.now() + 1, text: "Sorry, I received an unexpected response from the AI.", isBot: true }])
            }
        } catch (error) {
            console.error('Error sending message to backend:', error)
            if (error.response && error.response.data && error.response.data.msg) {
                setMessages(prev => [...prev, { id: Date.now() + 1, text: `Backend Error: ${error.response.data.msg}`, isBot: true }])
            } else {
                setMessages(prev => [...prev, { id: Date.now() + 1, text: "Sorry, I'm having trouble connecting right now.", isBot: true }])
            }
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <motion.button
                className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-2xl z-50 hover:from-indigo-600 hover:to-purple-700 transition-all duration-300"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleChat}
                aria-label="Open chat"
            >
                {isOpen ? <IoMdClose size={28} /> : <FaRobot size={28} />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-28 right-8 w-96 max-w-[90vw] h-[500px] bg-gradient-to-b from-white/90 to-gray-100/90 backdrop-blur-lg rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-white/30"
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-5 flex items-center justify-between">
                            <div className="flex items-center">
                                <FaRobot className="mr-3" size={24} />
                                <h3 className="font-semibold text-lg">AI Assistant</h3>
                            </div>
                            <button onClick={toggleChat} className="text-white hover:text-gray-200 transition-colors" aria-label="Close chat">
                                <IoMdClose size={24} />
                            </button>
                        </div>

                        <div className="flex-1 p-5 overflow-y-auto bg-transparent">
                            {messages.map((message) => (
                                <ChatMessage key={message.id} message={message} />
                            ))}
                            {isLoading && (
                                <div className="flex justify-start mb-4">
                                    <div className="bg-white/70 backdrop-blur-sm rounded-xl py-3 px-5 max-w-[80%] shadow-sm">
                                        <div className="flex space-x-2">
                                            <div
                                                className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-bounce"
                                                style={{ animationDelay: "0ms" }}
                                            ></div>
                                            <div
                                                className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-bounce"
                                                style={{ animationDelay: "150ms" }}
                                            ></div>
                                            <div
                                                className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-bounce"
                                                style={{ animationDelay: "300ms" }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSubmit} className="border-t border-white/20 p-5 bg-white/50 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    placeholder="Type your message..."
                                    className="flex-1 border border-gray-200/50 bg-white/70 backdrop-blur-sm rounded-xl py-3 px-5 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800 placeholder-gray-400"
                                    disabled={isLoading}
                                />
                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl py-3 px-5 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:bg-indigo-400 transition-all"
                                    disabled={isLoading || !inputValue.trim()}
                                >
                                    <IoSend size={20} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Chatbot