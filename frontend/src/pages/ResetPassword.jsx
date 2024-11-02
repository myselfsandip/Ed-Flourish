import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { FiLock, FiEye, FiEyeOff, FiCheckCircle } from 'react-icons/fi';

const ResetPassword = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [token, setToken] = useState('');

    useEffect(() => {
        // Get token from URL parameters
        const params = new URLSearchParams(location.search);
        const resetToken = params.get('token');

        // if (!resetToken) {
        //     navigate('/forgot_password');
        //     return;
        // }

        setToken(resetToken);
    }, [location, navigate]);

    const validatePassword = (password) => {
        const errors = [];

        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long');
        }
        if (!/[A-Z]/.test(password)) {
            errors.push('Password must contain at least one uppercase letter');
        }
        if (!/[a-z]/.test(password)) {
            errors.push('Password must contain at least one lowercase letter');
        }
        if (!/[0-9]/.test(password)) {
            errors.push('Password must contain at least one number');
        }
        if (!/[!@#$%^&*]/.test(password)) {
            errors.push('Password must contain at least one special character (!@#$%^&*)');
        }

        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear errors when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Validate password
        const passwordErrors = validatePassword(formData.password);
        if (passwordErrors.length > 0) {
            newErrors.password = passwordErrors;
        }

        // Validate password confirmation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);

        try {
            // Here you would make an API call to reset the password
            // Example: await api.resetPassword(token, formData.password);
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call

            setSuccess(true);
            // Clear form data
            setFormData({ password: '', confirmPassword: '' });
        } catch (error) {
            setErrors({
                submit: 'Failed to reset password. Please try again.'
            });
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
                    <h1 className="text-3xl font-bold text-white mb-2">Reset Password</h1>
                    <p className="text-gray-400">Enter your new password below</p>
                </div>

                {/* Reset Password Card */}
                <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                    {!success ? (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* New Password Field */}
                            <div>
                                <label className="text-sm text-gray-300">New Password</label>
                                <div className="relative mt-2">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiLock className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="Enter new password"
                                        className="w-full pl-10 pr-12 py-3 bg-[#1a1f2b] border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ?
                                            <FiEyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400" /> :
                                            <FiEye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                                        }
                                    </button>
                                </div>
                                {errors.password && (
                                    <div className="mt-2 space-y-1">
                                        {Array.isArray(errors.password) ? (
                                            errors.password.map((error, index) => (
                                                <p key={index} className="text-sm text-red-500">{error}</p>
                                            ))
                                        ) : (
                                            <p className="text-sm text-red-500">{errors.password}</p>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Password Requirements */}
                            <div className="space-y-2 text-sm text-gray-400">
                                <p className={formData.password.length >= 8 ? 'text-green-500' : ''}>
                                    <FiCheckCircle className={`inline mr-2 ${formData.password.length >= 8 ? 'text-green-500' : 'text-gray-500'}`} />
                                    At least 8 characters
                                </p>
                                <p className={/[A-Z]/.test(formData.password) ? 'text-green-500' : ''}>
                                    <FiCheckCircle className={`inline mr-2 ${/[A-Z]/.test(formData.password) ? 'text-green-500' : 'text-gray-500'}`} />
                                    One uppercase letter
                                </p>
                                <p className={/[a-z]/.test(formData.password) ? 'text-green-500' : ''}>
                                    <FiCheckCircle className={`inline mr-2 ${/[a-z]/.test(formData.password) ? 'text-green-500' : 'text-gray-500'}`} />
                                    One lowercase letter
                                </p>
                                <p className={/[0-9]/.test(formData.password) ? 'text-green-500' : ''}>
                                    <FiCheckCircle className={`inline mr-2 ${/[0-9]/.test(formData.password) ? 'text-green-500' : 'text-gray-500'}`} />
                                    One number
                                </p>
                                <p className={/[!@#$%^&*]/.test(formData.password) ? 'text-green-500' : ''}>
                                    <FiCheckCircle className={`inline mr-2 ${/[!@#$%^&*]/.test(formData.password) ? 'text-green-500' : 'text-gray-500'}`} />
                                    One special character
                                </p>
                            </div>

                            {/* Confirm Password Field */}
                            <div>
                                <label className="text-sm text-gray-300">Confirm New Password</label>
                                <div className="relative mt-2">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <FiLock className="h-5 w-5 text-gray-500" />
                                    </div>
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        placeholder="Confirm new password"
                                        className="w-full pl-10 pr-12 py-3 bg-[#1a1f2b] border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showConfirmPassword ?
                                            <FiEyeOff className="h-5 w-5 text-gray-500 hover:text-gray-400" /> :
                                            <FiEye className="h-5 w-5 text-gray-500 hover:text-gray-400" />
                                        }
                                    </button>
                                </div>
                                {errors.confirmPassword && (
                                    <p className="mt-2 text-sm text-red-500">{errors.confirmPassword}</p>
                                )}
                            </div>

                            {/* Submit Error */}
                            {errors.submit && (
                                <p className="text-sm text-red-500 text-center">{errors.submit}</p>
                            )}

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
                                        Resetting Password...
                                    </span>
                                ) : (
                                    'Reset Password'
                                )}
                            </button>
                        </form>
                    ) : (
                        /* Success Message */
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-500 bg-opacity-20 rounded-full mx-auto flex items-center justify-center mb-4">
                                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Password Reset Successfully</h3>
                            <p className="text-gray-400 mb-6">
                                Your password has been reset successfully. You can now login with your new password.
                            </p>
                            <Link
                                to="/login"
                                className="inline-block py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                            >
                                Return to Login
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;