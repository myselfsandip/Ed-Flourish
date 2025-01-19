import React, { useState } from 'react';
import { FaUser, FaGraduationCap, FaBook, FaCog, FaSignOutAlt } from 'react-icons/fa';

export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Student',
        semester: '1st',
        course: 'BCA',
        enrollmentNo: 'BCA2024001',
        skills: ['JavaScript', 'React', 'Node.js'],
    });

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = () => {
        setIsEditing(false);
        // Here you would typically send the updated data to your backend
        console.log('Saving user data:', userData);
    };

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mx-auto p-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-primary">Profile</h1>

            <div className="card bg-base-200 shadow-xl mb-8">
                <div className="card-body">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                        <div className="avatar">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Profile" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="card-title text-2xl mb-2 flex items-center gap-2">
                                <FaUser className="text-primary" />
                                Personal Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={userData.name}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="input input-bordered"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={userData.email}
                                        onChange={handleChange}
                                        disabled={!isEditing}
                                        className="input input-bordered"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card bg-base-200 shadow-xl mb-8">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4 flex items-center gap-2">
                        <FaGraduationCap className="text-primary" />
                        Academic Information
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course</span>
                            </label>
                            <input
                                type="text"
                                name="course"
                                value={userData.course}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Semester</span>
                            </label>
                            <input
                                type="text"
                                name="semester"
                                value={userData.semester}
                                onChange={handleChange}
                                disabled={!isEditing}
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control md:col-span-2">
                            <label className="label">
                                <span className="label-text">Enrollment Number</span>
                            </label>
                            <input
                                type="text"
                                name="enrollmentNo"
                                value={userData.enrollmentNo}
                                disabled
                                className="input input-bordered"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card bg-base-200 shadow-xl mb-8">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4 flex items-center gap-2">
                        <FaBook className="text-primary" />
                        Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {userData.skills.map((skill, index) => (
                            <span key={index} className="badge badge-primary badge-outline">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-between">
                <button
                    className={`btn ${isEditing ? 'btn-success' : 'btn-primary'}`}
                    onClick={isEditing ? handleSave : handleEdit}
                >
                    {isEditing ? (
                        <>
                            <FaUser className="mr-2" /> Save Changes
                        </>
                    ) : (
                        <>
                            <FaCog className="mr-2" /> Edit Profile
                        </>
                    )}
                </button>
                <button className="btn btn-error">
                    <FaSignOutAlt className="mr-2" /> Logout
                </button>
            </div>
        </div>
    );
}
