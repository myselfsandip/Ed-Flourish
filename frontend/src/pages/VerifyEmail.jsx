import { useState } from 'react';
import { Link } from "react-router-dom";
// import { FiMail, FiLock } from 'react-icons/fi';
import axios from 'axios';

const VerifyEmail = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const [error, setError] = useState('');
    const [resendCooldown, setResendCooldown] = useState(0);

    const handleOtpChange = (index, value) => {
        // Ensure only numbers are entered
        if (/^\d*$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Automatically move to next input if a digit is entered
            if (value && index < 5) {
                document.getElementById(`otp-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        // Allow backspace to delete and move to previous input
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            document.getElementById(`otp-${index - 1}`).focus();
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();

        // Check if all OTP fields are filled
        const fullOtp = otp.join('');
        if (fullOtp.length !== 6) {
            setError('Please enter the complete 6-digit OTP');
            return;
        }

        try {
            // Here you would typically call your verification API
            axios.post(import.meta.env.VITE_API_SERVER_URL + '/api/auth/verify_email', { code: fullOtp }).then((res) => {
                if (res.data.success) {
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        text: "Email Verified Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    }).then(() => navigate('/'));
                }
            }).catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: "Error!!",
                    text: "OTP Verification Failed",
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            console.log('Verifying OTP:', fullOtp);
            setError('');
            // Redirect or show success message
        } catch (err) {
            setError('Invalid OTP. Please try again.');
        }
    };

    const handleResendOtp = () => {
        if (resendCooldown === 0) {
            // Implement OTP resend logic here
            console.log('Resending OTP');

            // Start cooldown timer
            setResendCooldown(60);
            const timer = setInterval(() => {
                setResendCooldown((prev) => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
    };

    return (
        <div className="min-h-screen bg-[#0d1117] flex items-center justify-center p-4 bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto shadow-lg transform rotate-12 mb-4"></div>
                    <h1 className="text-3xl font-bold text-white mb-2">Verify Your Email</h1>
                    <p className="text-gray-400">Enter the 6-digit OTP sent to your email</p>
                </div>

                <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl shadow-xl p-8">
                    <form onSubmit={handleVerify} className="space-y-6">
                        <div className="flex justify-center space-x-2">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    id={`otp-${index}`}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleOtpChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    className="w-12 h-12 text-center text-xl bg-[#1a1f2b] border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-gray-200"
                                />
                            ))}
                        </div>

                        {error && (
                            <p className="text-center text-sm text-red-500 mt-2">{error}</p>
                        )}

                        <div className="text-center">
                            <button
                                type="submit"
                                className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg transition duration-300"
                            >
                                Verify OTP
                            </button>

                            <div className="mt-4 text-center">
                                <button
                                    type="button"
                                    onClick={handleResendOtp}
                                    disabled={resendCooldown > 0}
                                    className={`text-blue-400 hover:underline ${resendCooldown > 0 ? 'opacity-50 cursor-not-allowed' : ''
                                        }`}
                                >
                                    {resendCooldown > 0
                                        ? `Resend OTP in ${resendCooldown} seconds`
                                        : 'Resend OTP'}
                                </button>
                            </div>
                        </div>
                    </form>

                    <p className="text-center text-gray-400 text-sm mt-4">
                        Didn't receive the OTP?{" "}
                        <Link to="/register" className="text-blue-400 hover:underline">
                            Go back to Registration
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VerifyEmail;