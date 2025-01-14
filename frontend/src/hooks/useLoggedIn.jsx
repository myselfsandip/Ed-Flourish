import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import axios from 'axios';


const useLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                // Changed to POST and correct endpoint
                const response = await axios.post(
                    import.meta.env.VITE_API_SERVER_URL + '/api/auth/check_auth',
                    {},
                    {
                        withCredentials: true, // Required for cookies to be sent
                        headers: { 'Content-Type': 'application/json' }
                    }
                );
                

                if (response.data.success) {
                    setIsLoggedIn(true);
                    setUser(response.data.user);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            } catch (err) {
                console.error('Auth check error:', err);
                setError(err.response?.data?.msg || 'Authentication check failed');
                setIsLoggedIn(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkAuthStatus();
    }, []);

    const logout = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_SERVER_URL}/api/auth/logout`,
                {},
                { withCredentials: true }
            );

            if (response.data.success) {
                setIsLoggedIn(false);
                setUser(null);
                navigate('/login');
            }
        } catch (err) {
            setError(err.response?.data?.msg || 'Logout failed');
        }
    };

    const refreshUser = async () => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_SERVER_URL}/api/auth/check_auth`,
                {},
                { withCredentials: true }
            );

            if (response.data.success) {
                setUser(response.data.user);
            }
        } catch (err) {
            setError(err.response?.data?.msg || 'Failed to refresh user data');
        }
    };

    return {
        isLoggedIn,
        user,
        loading,
        error,
        logout,
        refreshUser
    };
};

export default useLoggedIn;