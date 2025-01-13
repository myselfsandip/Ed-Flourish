import React, { useState } from 'react';
import NavBarFront from '../components/NavBarFront';
import Footer from '../components/Footer';

// Dummy data for blog posts
const dummyBlogs = [
    {
        id: 1,
        title: "Getting Started with React Hooks",
        category: "React",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhY3R8ZW58MHx8MHx8fDA%3D",
        description: "Learn how to use React Hooks to manage state and side effects in your functional components.",
        author: "Jane Doe",
        date: "2024-01-15"
    },
    {
        id: 2,
        title: "Python for Data Science: A Beginner's Guide",
        category: "Python",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHl0aG9ufGVufDB8fDB8fHww",
        description: "Discover how Python can be used for data analysis, visualization, and machine learning.",
        author: "John Smith",
        date: "2024-01-18"
    },
    {
        id: 3,
        title: "Building Scalable Microservices with Node.js",
        category: "Backend",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWljcm9zZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Learn best practices for designing and implementing microservices architecture using Node.js.",
        author: "Alice Johnson",
        date: "2024-01-20"
    },
    {
        id: 4,
        title: "Mastering CSS Grid Layout",
        category: "CSS",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3NzfGVufDB8fDB8fHww",
        description: "Explore advanced techniques for creating complex layouts using CSS Grid.",
        author: "Emily Chen",
        date: "2024-01-22"
    },
    {
        id: 5,
        title: "Introduction to Machine Learning with TensorFlow",
        category: "AI",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGVuc29yZmxvd3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Get started with machine learning concepts and implement your first models using TensorFlow.",
        author: "Michael Brown",
        date: "2024-01-25"
    },
    {
        id: 6,
        title: "Optimizing Database Performance in PostgreSQL",
        category: "Database",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGF0YWJhc2V8ZW58MHx8MHx8fDA%3D",
        description: "Learn techniques for improving query performance and optimizing database structures in PostgreSQL.",
        author: "Sarah Lee",
        date: "2024-01-28"
    },
    {
        id: 7,
        title: "Building Real-time Applications with WebSockets",
        category: "Web Development",
        image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2Vic29ja2V0c3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Explore the power of WebSockets for creating interactive, real-time web applications.",
        author: "David Wilson",
        date: "2024-01-30"
    },
    {
        id: 8,
        title: "Securing Your Web Applications: Best Practices",
        category: "Security",
        image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y3liZXJzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D",
        description: "Learn essential security techniques to protect your web applications from common vulnerabilities.",
        author: "Olivia Taylor",
        date: "2024-02-02"
    },
    {
        id: 9,
        title: "Mastering Git and GitHub for Effective Collaboration",
        category: "Version Control",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2l0fGVufDB8fDB8fHww",
        description: "Improve your Git skills and learn advanced GitHub features for better team collaboration.",
        author: "Ryan Martinez",
        date: "2024-02-05"
    },
    {
        id: 10,
        title: "Introduction to Blockchain Technology",
        category: "Blockchain",
        image: "https://images.unsplash.com/photo-1621579429200-d58a1d9fb9f3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
        description: "Understand the fundamentals of blockchain technology and its potential applications.",
        author: "Sophie Anderson",
        date: "2024-02-08"
    },
    {
        id: 11,
        title: "Responsive Web Design: From Mobile to Desktop",
        category: "Web Design",
        image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzcG9uc2l2ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        description: "Master the art of creating responsive websites that look great on all devices.",
        author: "Chris Evans",
        date: "2024-02-10"
    },
    {
        id: 12,
        title: "Getting Started with Docker for Development",
        category: "DevOps",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9ja2VyfGVufDB8fDB8fHww",
        description: "Learn how to use Docker to streamline your development workflow and improve deployment processes.",
        author: "Emma Watson",
        date: "2024-02-12"
    }
];

const BlogCard = ({ blog }) => (
    <div className="bg-[#2a2f38] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
        <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-500 mb-2">
                {blog.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
            <p className="text-gray-300 mb-4">{blog.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
            </div>
        </div>
    </div>
);

const Blogs = () => {
    const [visibleBlogs, setVisibleBlogs] = useState(6);

    const loadMore = () => {
        setVisibleBlogs(prevVisible => Math.min(prevVisible + 3, dummyBlogs.length));
    };

    return (
        <div className="bg-[#0f1319] min-h-screen flex flex-col">
            <NavBarFront />
            <main id="blogpage" className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Explore Our Latest Blogs
                    </h1>
                    <p className="text-xl text-gray-300 text-center mb-12">
                        Dive into a world of knowledge with our curated collection of tech insights and tutorials.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {dummyBlogs.slice(0, visibleBlogs).map(blog => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                    {visibleBlogs < dummyBlogs.length && (
                        <div className="text-center mt-12">
                            <button
                                onClick={loadMore}
                                className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 hover:shadow-xl"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Blogs;

