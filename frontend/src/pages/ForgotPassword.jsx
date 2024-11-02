import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiArrowLeft } from 'react-icons/fi';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Validate email
        if (!email.trim()) {
            setError('Please enter your email address');
            return;
        }

        if (!validateEmail(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsLoading(true);

        try {
            // Here you would typically make an API call to initiate password reset
            // For demonstration, we're simulating an API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            setSuccess(true);
            setEmail('');
        } catch (err) {
            setError('Failed to send reset instructions. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-4 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]">
            <div className="w-full max-w-md">
                {/* Logo/Welcome Section */}
                <div className="text-center mb-8">
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto shadow-lg transform rotate-12 mb-4"></div>
                    <h1 className="text-3xl font-bold text-white mb-2">Forgot Password</h1>
                    <p className="text-gray-400">Enter your email to reset your password</p>
                </div>

                {/* Reset Password Card */}
                <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                    {!success ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Email Field */}
                            <div>
                                <label className="text-sm text-gray-300">Email Address</label>
                                <div className="relative mt-2">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiMail className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full pl-10 pr-4 py-3 bg-[#1a1f2b] border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
                                    />
                                </div>
                                {error && (
                                    <p className="mt-2 text-sm text-red-500">{error}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    'Send Reset Instructions'
                                )}
                            </button>

                            {/* Back to Login Link */}
                            <div className="text-center">
                                <Link
                                    to="/login"
                                    className="inline-flex items-center text-sm text-gray-400 hover:text-gray-300"
                                >
                                    <FiArrowLeft className="mr-2" />
                                    Back to Login
                                </Link>
                            </div>
                        </form>
                    ) : (
                        /* Success Message */
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Check Your Email</h3>
                            <p className="text-gray-400 mb-6">
                                We've sent password reset instructions to your email address.
                            </p>
                            <div className="flex flex-col space-y-3">
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="text-blue-500 hover:text-blue-400 text-sm"
                                >
                                    Try another email
                                </button>
                                <Link
                                    to="/login"
                                    className="text-gray-400 hover:text-gray-300 text-sm"
                                >
                                    Back to Login
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;