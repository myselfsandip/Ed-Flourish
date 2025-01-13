import React from 'react';
import { BiLoaderAlt } from 'react-icons/bi';

const LoadingSpinner = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <BiLoaderAlt className="w-16 h-16 text-blue-600 animate-spin" />
                <h2 className="text-xl font-semibold">Loading...</h2>
            </div>
        </div>
    );
};

export default LoadingSpinner;