import React, { useState } from "react"
import { FaSearch, FaBook, FaCheckCircle, FaClock, FaGraduationCap } from "react-icons/fa"

const courseData = [
    { id: 1, name: "Introduction to Programming", code: "CS101", progress: 75 },
    { id: 2, name: "Digital Electronics", code: "EE201", progress: 40 },
    { id: 3, name: "Mathematics for Computer Science", code: "MA102", progress: 90 },
    { id: 4, name: "Computer Networks", code: "CS301", progress: 60 },
]

export default function Dashboard() {
    const [searchQuery, setSearchQuery] = useState("")

    const filteredCourses = courseData.filter(
        (course) =>
            course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.code.toLowerCase().includes(searchQuery.toLowerCase()),
    )

    return (
        <div className="container mx-auto p-4 max-w-6xl">
            <h1 className="text-4xl font-bold mb-8 text-primary">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                    { label: "Courses", value: courseData.length, icon: FaBook, color: "primary" },
                    { label: "Completed", value: 2, icon: FaCheckCircle, color: "success" },
                    { label: "In Progress", value: 2, icon: FaClock, color: "warning" },
                    { label: "Overall Progress", value: "65%", icon: FaGraduationCap, color: "info" },
                ].map((stat, index) => (
                    <div key={index} className={`card bg-base-200 shadow-xl`}>
                        <div className="card-body items-center text-center">
                            <stat.icon className={`text-4xl text-${stat.color}`} />
                            <h2 className="card-title text-3xl">{stat.value}</h2>
                            <p className="text-base-content text-opacity-60">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="card bg-base-200 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl mb-4">My Courses</h2>
                    <div className="form-control mb-4">
                        <div className="input-group">
                            <input
                                type="text"
                                placeholder="Search courses..."
                                className="input input-bordered flex-1"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="btn btn-square">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredCourses.map((course) => (
                            <div key={course.id} className="card bg-base-100 shadow-md">
                                <div className="card-body">
                                    <h3 className="card-title text-lg">{course.name}</h3>
                                    <p className="text-base-content text-opacity-60">{course.code}</p>
                                    <progress className="progress progress-primary w-full" value={course.progress} max="100"></progress>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm">{course.progress}% Complete</span>
                                        <button className="btn btn-primary btn-sm">Continue</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

