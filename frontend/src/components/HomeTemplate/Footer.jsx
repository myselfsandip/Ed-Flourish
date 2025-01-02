import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">Ed</span>
              </div>
              <h1 className="text-2xl font-bold">EdFlourish</h1>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Learn and foster your knowledge in the coding world with our
                site. Learn, grow, and explore!
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our platform is dedicated to helping you master the art of
                coding. Whether you're a beginner or an experienced developer,
                we have resources to support your learning journey.
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors duration-200">
              Join Community
            </button>
          </div>

          {/* Right section */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold mb-8">Learning Paths</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8">
              {[
                "Learn Java",
                "Learn PHP",
                "Operating Systems",
                "Python Programming",
                "CS Fundamentals",
                "BCA Curriculum",
                "Software Engineering",
                "Frontend Technologies",
                "Backend Development",
                "Data Structures",
                "Database Management",
                "Web Development",
                "Mobile App Dev",
                "Cloud Computing",
                "AI Fundamentals",
                "Cybersecurity",
              ].map((path, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center space-x-2"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span>{path}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 EdFlourish. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
