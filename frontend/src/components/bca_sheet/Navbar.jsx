import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaRegUserCircle } from "react-icons/fa"
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import styled from "styled-components"
import useLoggedIn from "../../hooks/useLoggedIn"

const NavbarContainer = styled(motion.div)`
  backdrop-filter: blur(10px);
  background: rgba(15, 23, 42, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const MenuButton = styled(motion.button)`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(59, 130, 246, 0.1);
  color: #60A5FA;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.2);
    color: #93C5FD;
  }
`

const UserButton = styled(motion.button)`
  padding: 8px 12px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(59, 130, 246, 0.1);
  color: #60A5FA;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.2);
    color: #93C5FD;
  }
`

const Dropdown = styled(motion.div)`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  border-radius: 0.75rem;
  background: rgb(31, 41, 55);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 50;
`

export const Navbar = ({ onMenuClick, isSidebarOpen, isMobile }) => {
    const [dropdownState, setDropdownState] = useState(false)
    const { logout } = useLoggedIn()
    const dropdownRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownState(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <NavbarContainer
            className="fixed top-0 right-0 left-0 z-10 px-4 py-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center justify-between h-14">
                <div className="flex items-center gap-4">
                    {isMobile && (
                        <MenuButton onClick={onMenuClick} whileTap={{ scale: 0.95 }}>
                            {isSidebarOpen ? <RiCloseLine className="text-2xl" /> : <RiMenu3Line className="text-2xl" />}
                        </MenuButton>
                    )}

                    <motion.h1
                        className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        BCA Portal
                    </motion.h1>
                </div>

                <div className="relative" ref={dropdownRef}>
                    <UserButton
                        onClick={() => setDropdownState(!dropdownState)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaRegUserCircle className="text-xl" />
                        <span className="hidden sm:block">Account</span>
                    </UserButton>

                    <AnimatePresence>
                        {dropdownState && (
                            <Dropdown
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link
                                    to="/profile"
                                    className="block px-4 py-2 text-gray-300 hover:bg-blue-500/10 transition-colors"
                                    onClick={() => setDropdownState(false)}
                                >
                                    Profile
                                </Link>
                                <Link
                                    to="/bca/settings"
                                    className="block px-4 py-2 text-gray-300 hover:bg-blue-500/10 transition-colors"
                                    onClick={() => setDropdownState(false)}
                                >
                                    Settings
                                </Link>
                                <div className="border-t border-gray-700/50"></div>
                                <button
                                    onClick={() => {
                                        setDropdownState(false)
                                        logout()
                                    }}
                                    className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 transition-colors"
                                >
                                    Logout
                                </button>
                            </Dropdown>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </NavbarContainer>
    )
}
