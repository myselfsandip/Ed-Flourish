import React, { useState } from 'react';

function Settings() {
    const [profileData, setProfileData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
    });
    const [password, setPassword] = useState('');
    const [notifications, setNotifications] = useState(true);

    const handleProfileChange = (e) => {
        const { name, value } = e.target;
        setProfileData({ ...profileData, [name]: value });
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleNotificationToggle = () => {
        setNotifications(!notifications);
    };

    const handleSave = () => {
        // Add save functionality here
        alert('Settings saved!');
    };

    return (
        <div className="min-h-screen w-full lg:w-[78vw] mx-auto p-8 bg-gray-900">
            <div className="flex flex-col w-full   mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
                <h2 className="text-3xl font-bold text-center lg:text-left">Settings</h2>

                {/* Profile Settings */}
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Profile Settings</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-400 mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={profileData.name}
                                onChange={handleProfileChange}
                                className="w-full p-2 rounded-lg bg-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-400 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={profileData.email}
                                onChange={handleProfileChange}
                                className="w-full p-2 rounded-lg bg-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Password Update */}
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Update Password</h3>
                    <label className="block text-gray-400 mb-1">New Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="w-full p-2 rounded-lg bg-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Notifications */}
                <div className="bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Notifications</h3>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={notifications}
                            onChange={handleNotificationToggle}
                            className="h-5 w-5 text-blue-500 mr-3"
                        />
                        <span className="text-gray-300">Receive notifications</span>
                    </div>
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSave}
                        className="px-6 py-3 bg-blue-500 rounded-lg text-white font-semibold hover:bg-blue-600 focus:outline-none"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Settings;
