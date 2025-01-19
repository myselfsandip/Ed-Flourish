import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainContentSection from "./MainContentSection";
import { Navbar } from "./Navbar";
import { Sidebar } from "./Sidebar";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #0f172a, #1e293b);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(30, 41, 59, 0) 70%);
    pointer-events: none;
  }
`;

const MainContent = styled(motion.div)`
  flex: 1;
  margin-left: ${props => props.$sidebarWidth};
  transition: margin-left 0.3s ease;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`;

export default function CourseTemplate() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const sidebarWidth = "280px";

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth < 1024) {
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <PageWrapper>
            <AnimatePresence mode="wait">
                {(isSidebarOpen || !isMobile) && (
                    <>
                        {isMobile && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black z-20"
                                onClick={() => setIsSidebarOpen(false)}
                            />
                        )}
                        <Sidebar
                            isOpen={isSidebarOpen}
                            setIsOpen={setIsSidebarOpen}
                            width={sidebarWidth}
                            isMobile={isMobile}
                        />
                    </>
                )}
            </AnimatePresence>

            <MainContent
                $sidebarWidth={isMobile ? "0px" : sidebarWidth}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Navbar
                    onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    isSidebarOpen={isSidebarOpen}
                    isMobile={isMobile}
                />
                <div className="mt-16 min-h-[calc(100vh-4rem)]">
                    <MainContentSection />
                </div>
            </MainContent>
        </PageWrapper>
    );
}
