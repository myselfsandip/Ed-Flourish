import React, { useState } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import { FaLock, FaBell, FaSave } from "react-icons/fa"

const PageContainer = styled(motion.div)`
    min-height: 100vh;
    background: linear-gradient(to bottom right, #0f172a, #1e293b);
    padding: 2rem 1rem;
    
    @media (min-width: 640px) {
        padding: 2rem;
    }
`

const Card = styled(motion.div)`
    background: rgba(30, 41, 59, 0.5);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
`

const Input = styled.input`
    width: 100%;
    padding: 0.75rem 1rem;
    background: rgba(30, 41, 59, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.5rem;
    color: #ffffff;
    transition: all 0.2s ease;
    
    &:focus {
        outline: none;
        border-color: rgba(96, 165, 250, 0.5);
        box-shadow: 0 0 0 2px rgba(96, 165, 250, 0.2);
    }
`

const Button = styled(motion.button)`
    background: linear-gradient(135deg, #3B82F6, #60A5FA);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(96, 165, 250, 0.5);
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    color: #ffffff;
    font-weight: 600;
    transition: all 0.2s ease;
    
    &:hover {
        background: linear-gradient(135deg, #2563EB, #3B82F6);
    }
`

const Toggle = styled.label`
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    
    input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    span {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(30, 41, 59, 0.5);
        transition: .4s;
        border-radius: 34px;
        
        &:before {
            position: absolute;
            content: "";
            height: 26px;
            width: 26px;
            left: 4px;
            bottom: 4px;
            background-color: white;
            transition: .4s;
            border-radius: 50%;
        }
    }
    
    input:checked + span {
        background-color: #3B82F6;
    }
    
    input:checked + span:before {
        transform: translateX(26px);
    }
`

function Settings() {
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [notifications, setNotifications] = useState(true)

    const handleSave = () => {
        // Add save functionality here
        alert("Settings saved!")
    }

    return (
        <PageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="max-w-2xl mx-auto">
                <motion.h1
                    className="text-4xl font-bold text-white mb-8"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    Settings
                </motion.h1>

                <Card initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
                        <FaLock className="mr-2" /> Change Password
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-gray-400 mb-1">Current Password</label>
                            <Input
                                type="password"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                placeholder="Enter current password"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-1">New Password</label>
                            <Input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                placeholder="Enter new password"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-1">Confirm New Password</label>
                            <Input
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder="Confirm new password"
                            />
                        </div>
                    </div>
                </Card>

                <Card initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
                    <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center">
                        <FaBell className="mr-2" /> Notifications
                    </h2>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-300">Receive notifications</span>
                        <Toggle>
                            <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} />
                            <span></span>
                        </Toggle>
                    </div>
                </Card>

                <div className="flex justify-end mt-6">
                    <Button onClick={handleSave} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <FaSave className="inline mr-2" /> Save Changes
                    </Button>
                </div>
            </div>
        </PageContainer>
    )
}

export default Settings

