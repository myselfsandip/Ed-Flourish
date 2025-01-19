import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { FaCheck, FaTimes, FaHome, FaRedo, FaPlay, FaClock } from 'react-icons/fa';
import { questions } from '../../assets/data.js';

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
    margin-bottom: 1.5rem;
`;

const Button = styled(motion.button)`
    background: ${props => props.$primary ?
        'linear-gradient(135deg, #3B82F6, #60A5FA)' :
        'rgba(30, 41, 59, 0.5)'};
    backdrop-filter: blur(10px);
    border: 1px solid ${props => props.$primary ?
        'rgba(96, 165, 250, 0.5)' :
        'rgba(255, 255, 255, 0.1)'};
    border-radius: 0.5rem;
    padding: 0.75rem 1.5rem;
    color: ${props => props.$primary ? '#ffffff' : '#94a3b8'};
    font-weight: 600;
    transition: all 0.2s ease;
    
    &:hover {
        background: ${props => props.$primary ?
        'linear-gradient(135deg, #2563EB, #3B82F6)' :
        'rgba(59, 130, 246, 0.2)'};
        color: #ffffff;
    }
    
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const ProgressBar = styled.div`
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
    margin-bottom: 1rem;
    overflow: hidden;
    
    &::after {
        content: '';
        display: block;
        height: 100%;
        width: ${props => props.$progress}%;
        background: linear-gradient(90deg, #3B82F6, #60A5FA);
        transition: width 0.3s ease;
    }
`;

function MockTest() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes
    const [isStarted, setIsStarted] = useState(false);

    useEffect(() => {
        if (isStarted && timeLeft > 0 && !showResults) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else if (timeLeft === 0 && !showResults) {
            setShowResults(true);
        }
    }, [timeLeft, showResults, isStarted]);

    const handleStart = () => {
        setIsStarted(true);
    };

    const handleAnswerSelect = (questionId, answerId) => {
        setSelectedAnswers({ ...selectedAnswers, [questionId]: answerId });
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    const calculateScore = () => {
        let score = 0;
        questions.forEach((question) => {
            if (selectedAnswers[question.id] === question.correctAnswer) {
                score++;
            }
        });
        return score;
    };

    const resetTest = () => {
        setCurrentQuestion(0);
        setSelectedAnswers({});
        setShowResults(false);
        setTimeLeft(60 * 60);
        setIsStarted(false);
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    if (!isStarted) {
        return (
            <PageContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="max-w-3xl mx-auto">
                    <Card
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-100">BCA Mock Test</h2>
                        <p className="text-lg mb-4 text-gray-300">
                            This mock test consists of {questions.length} multiple-choice questions.
                            You will have 60 minutes to complete the test.
                        </p>
                        <p className="text-lg mb-6 text-gray-300">
                            Make sure you're in a quiet environment and ready to begin.
                        </p>
                        <div className="flex justify-center">
                            <Button
                                $primary
                                onClick={handleStart}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaPlay className="inline mr-2" /> Start Test
                            </Button>
                        </div>
                    </Card>
                </div>
            </PageContainer>
        );
    }

    if (showResults) {
        const score = calculateScore();
        return (
            <PageContainer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="max-w-3xl mx-auto">
                    <Card
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-gray-100">Mock Test Results</h2>
                        <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                            Your Score: {score} / {questions.length}
                        </h3>
                        <p className="text-lg mb-6 text-gray-300">
                            Percentage: {((score / questions.length) * 100).toFixed(2)}%
                        </p>
                        <div className="space-y-4 mb-6">
                            {questions.map((question) => (
                                <div key={question.id} className="bg-gray-700/50 p-4 rounded-lg">
                                    <p className="font-semibold mb-2 text-gray-100">{question.question}</p>
                                    <p className="flex items-center text-gray-300">
                                        Your answer:
                                        <span className={`ml-2 ${selectedAnswers[question.id] === question.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                                            {question.answers.find(a => a.id === selectedAnswers[question.id])?.text || 'Not answered'}
                                            {selectedAnswers[question.id] === question.correctAnswer ? (
                                                <FaCheck className="inline ml-2" />
                                            ) : (
                                                <FaTimes className="inline ml-2" />
                                            )}
                                        </span>
                                    </p>
                                    {selectedAnswers[question.id] !== question.correctAnswer && (
                                        <p className="text-green-500">
                                            Correct answer: {question.answers.find(a => a.id === question.correctAnswer).text}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center space-x-4">
                            <Button
                                $primary
                                onClick={resetTest}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaRedo className="inline mr-2" /> Take Test Again
                            </Button>
                            <Button
                                onClick={() => {/* Implement navigation to home */ }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaHome className="inline mr-2" /> Go Home
                            </Button>
                        </div>
                    </Card>
                </div>
            </PageContainer>
        );
    }

    return (
        <PageContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="max-w-3xl mx-auto">
                <Card
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-blue-400">
                            Question {currentQuestion + 1} of {questions.length}
                        </h3>
                        <span className="text-lg font-semibold text-gray-300 flex items-center">
                            <FaClock className="mr-2" /> {formatTime(timeLeft)}
                        </span>
                    </div>
                    <ProgressBar $progress={(currentQuestion + 1) / questions.length * 100} />
                    <p className="text-lg mb-6 text-gray-300">{questions[currentQuestion].question}</p>
                    <div className="space-y-3">
                        <AnimatePresence>
                            {questions[currentQuestion].answers.map((answer) => (
                                <motion.button
                                    key={answer.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    onClick={() => handleAnswerSelect(questions[currentQuestion].id, answer.id)}
                                    className={`w-full text-left p-3 rounded-lg transition-colors ${selectedAnswers[questions[currentQuestion].id] === answer.id
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-700/50 hover:bg-blue-500/20 text-gray-300 hover:text-white'
                                        }`}
                                >
                                    {answer.text}
                                </motion.button>
                            ))}
                        </AnimatePresence>
                    </div>
                </Card>
                <div className="flex justify-between mt-6">
                    <Button
                        onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                        disabled={currentQuestion === 0}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Previous
                    </Button>
                    {currentQuestion < questions.length - 1 ? (
                        <Button
                            $primary
                            onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Next
                        </Button>
                    ) : (
                        <Button
                            $primary
                            onClick={handleSubmit}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Submit Test
                        </Button>
                    )}
                </div>
            </div>
        </PageContainer>
    );
}

export default MockTest;
