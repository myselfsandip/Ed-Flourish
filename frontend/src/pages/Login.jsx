import { useState } from 'react';
import { Link } from "react-router-dom";
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();

        axios.post(import.meta.env.VITE_API_SERVER_URL + '/api/auth/login', { email, password }, {withCredentials: true}).then((res) => {
            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Success",
                    text: res.data.msg || "Login Successful!",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => navigate('/'));
            } else {
                throw new Error(res.data.msg || "Login failed");
            }
        }).catch((err) => {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: err.response?.data?.msg || "Login failed. Please try again.",
            });
        })
    }

    return (
        <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-4 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]">
            <div className="w-full max-w-md">
                {/* Logo/Welcome Section */}
                <div className="text-center mb-8">
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto shadow-lg transform rotate-12 mb-4"></div>
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Please sign in to your account</p>
                </div>

                {/* Login Card */}
                <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                    <form className="space-y-6" onSubmit={formSubmitHandler}>
                        {/* Email Field */}
                        <div>
                            <label className="text-sm text-gray-300">Email</label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiMail className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type="text"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="w-full pl-10 pr-4 py-3 bg-[#1a1f2b] border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-200 placeholder-gray-500"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="text-sm text-gray-300">Password</label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiLock className="h-5 w-5 text-gray-500" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
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
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                                />
                                <label className="ml-2 text-sm text-gray-400">Remember me</label>
                            </div>
                            <Link to={"/forgot_password"} className="text-sm text-blue-400 hover:text-blue-300">
                                Forgot password?
                            </Link>
                        </div>

                        {/* Sign In Button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-[#1a1f2b] transition-all duration-200"
                        >
                            Sign in
                        </button>





                        {/* Register Link */}
                        <div className="text-center text-gray-400 mt-5">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium">
                                Sign up for free
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;