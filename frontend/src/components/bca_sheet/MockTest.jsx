import React, { useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaHome, FaRedo, FaPlay } from 'react-icons/fa';
import { questions } from '../../assets/data.js';

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
            <div className="bg-gray-900 min-h-screen w-full lg:w-[78vw] mx-auto p-8">
                <div className="h-4/6 p-8 rounded-lg shadow-inner flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold mb-6 text-gray-100">BCA Mock Test</h2>
                    <div className="bg-gray-800 p-6 rounded-lg mb-6 text-center">
                        <p className="text-lg mb-4 text-gray-300">
                            This mock test consists of 50 multiple-choice questions.
                            You will have 60 minutes to complete the test.
                        </p>
                        <p className="text-lg mb-4 text-gray-300">
                            Make sure you're in a quiet environment and ready to begin.
                        </p>
                        <div className="flex justify-center">
                            <button
                                onClick={handleStart}
                                className="btn btn-primary btn-lg flex items-center justify-center"
                            >
                                <FaPlay className="mr-2" /> Start Test
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (showResults) {
        const score = calculateScore();
        return (
            <div className="min-h-screen w-full lg:w-[78vw] mx-auto p-8 bg-gray-900">
                <h2 className="text-3xl font-bold mb-6 text-gray-100">Mock Test Results</h2>
                <div className="bg-gray-800 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                        Your Score: {score} / {questions.length}
                    </h3>
                    <p className="text-lg mb-4 text-gray-300">
                        Percentage: {((score / questions.length) * 100).toFixed(2)}%
                    </p>
                    <div className="space-y-4">
                        {questions.map((question) => (
                            <div key={question.id} className="bg-gray-700 p-4 rounded-lg">
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
                </div>
                <div className="flex justify-center space-x-4">
                    <button
                        onClick={resetTest}
                        className="btn btn-primary flex items-center"
                    >
                        <FaRedo className="mr-2" /> Take Test Again
                    </button>
                    <button
                        onClick={() => {/* Implement navigation to home */ }}
                        className="btn btn-secondary flex items-center"
                    >
                        <FaHome className="mr-2" /> Go Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full lg:w-[78vw] mx-auto p-8 bg-gray-900">
            <h2 className="text-3xl font-bold mb-6 text-gray-100">BCA Mock Test</h2>
            <div className="bg-gray-800 p-6 rounded-lg mb-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-blue-400">
                        Question {currentQuestion + 1} of {questions.length}
                    </h3>
                    <span className="text-lg font-semibold text-gray-300">Time Left: {formatTime(timeLeft)}</span>
                </div>
                <p className="text-lg mb-4 text-gray-300">{questions[currentQuestion].question}</p>
                <div className="space-y-2">
                    {questions[currentQuestion].answers.map((answer) => (
                        <button
                            key={answer.id}
                            onClick={() => handleAnswerSelect(questions[currentQuestion].id, answer.id)}
                            className={`w-full text-left p-3 rounded-lg transition-colors ${selectedAnswers[questions[currentQuestion].id] === answer.id
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-700 hover:bg-blue-500 hover:text-white'
                                }`}
                        >
                            {answer.text}
                        </button>
                    ))}
                </div>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
                    disabled={currentQuestion === 0}
                    className="btn btn-neutral"
                >
                    Previous
                </button>
                {currentQuestion < questions.length - 1 ? (
                    <button
                        onClick={() => setCurrentQuestion(Math.min(questions.length - 1, currentQuestion + 1))}
                        className="btn btn-primary"
                    >
                        Next
                    </button>
                ) : (
                    <button onClick={handleSubmit} className="btn btn-primary">
                        Submit Test
                    </button>
                )}
            </div>
        </div>
    );
}

export default MockTest;
