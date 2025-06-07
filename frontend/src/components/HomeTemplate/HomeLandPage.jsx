import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../logo/bulb.png";
import Footer from '../Footer';
import NavBarFront from "../NavBarFront"
import axios from 'axios';
import { FaBriefcase } from 'react-icons/fa';

console.log(logo); // Keep this for debugging



const Content1 = () => {
  const [activeTab, setActiveTab] = useState("python");
  const [currentLine, setCurrentLine] = useState(0);

  const codeSnippets = {
    python: [
      { code: "# Welcome to Ed-Flourish", color: "text-gray-400" },
      { code: "def greet():", color: "text-sky-400" },
      { code: '    message = "Foster your knowledge"', color: "text-green-400" },
      { code: '    journey = "Start your journey with us"', color: "text-green-400" },
      { code: "", color: "text-white" },
      { code: "    print('Welcome to Ed-Flourish 🚀')", color: "text-purple-400" },
      { code: "    print(f'{message} 🔥')", color: "text-purple-400" },
      { code: "    print(f'{journey} ⭐')", color: "text-purple-400" },
      { code: "", color: "text-white" },
      { code: "if __name__ == '__main__':", color: "text-sky-400" },
      { code: "    greet()", color: "text-orange-400" },
    ],
    javascript: [
      { code: "// Welcome to Ed-Flourish", color: "text-gray-400" },
      { code: "const welcomeMessage = () => {", color: "text-sky-400" },
      { code: '  const message = "Foster your knowledge";', color: "text-green-400" },
      { code: '  const journey = "Start your journey with us";', color: "text-green-400" },
      { code: "", color: "text-white" },
      { code: "  console.log('Welcome to Ed-Flourish 🚀');", color: "text-purple-400" },
      { code: "  console.log(`${message} 🔥`);", color: "text-purple-400" },
      { code: "  console.log(`${journey} ⭐`);", color: "text-purple-400" },
      { code: "}", color: "text-sky-400" },
      { code: "", color: "text-white" },
      { code: "welcomeMessage();", color: "text-orange-400" },
    ],
    java: [
      { code: "// Welcome to Ed-Flourish", color: "text-gray-400" },
      { code: "public class Welcome {", color: "text-sky-400" },
      { code: "    public static void main(String[] args) {", color: "text-purple-400" },
      { code: '        String message = "Foster your knowledge";', color: "text-green-400" },
      { code: '        String journey = "Start your journey with us";', color: "text-green-400" },
      { code: "", color: "text-white" },
      { code: '        System.out.println("Welcome to Ed-Flourish 🚀");', color: "text-orange-400" },
      { code: '        System.out.println(message + " 🔥");', color: "text-orange-400" },
      { code: '        System.out.println(journey + " ⭐");', color: "text-orange-400" },
      { code: "    }", color: "text-purple-400" },
      { code: "}", color: "text-sky-400" },
    ],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % (codeSnippets[activeTab].length + 1));
    }, 800);
    return () => clearInterval(timer);
  }, [activeTab]);

  const languages = {
    python: { name: "Python", color: "bg-yellow-500" },
    javascript: { name: "JavaScript", color: "bg-yellow-400" },
    java: { name: "Java", color: "bg-red-500" },
  };

  return (
    <div className="min-h-screen bg-[#0f1319] p-8 flex flex-col items-center justify-center">
      {/* Welcome Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4 mt-md-2">
          Welcome to Ed-Flourish
        </h1>
        <p className="text-lg text-gray-300">Start your journey with us</p>
      </div>

      <div className="w-full max-w-4xl bg-[#1a1e24] rounded-xl shadow-2xl overflow-hidden">
        {/* Top Bar */}
        <div className="bg-[#2a2e35] p-4 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-gray-400 text-sm">Ed-Flourish IDE</div>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </div>
        </div>

        {/* Tab Bar */}
        <div className="flex bg-[#2a2e35] border-b border-gray-700">
          {Object.entries(languages).map(([key, lang]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 ${activeTab === key
                ? "bg-[#1a1e24] text-white border-t-2 border-blue-400"
                : "text-gray-400 hover:bg-[#1a1e24] hover:text-gray-300"
                }`}
            >
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${lang.color}`}></div>
                <span>{lang.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Code Area */}
        <div className="p-6 font-mono text-sm">
          <div className="flex">
            {/* Line Numbers */}
            <div className="pr-4 text-gray-600 select-none border-r border-gray-700">
              {codeSnippets[activeTab].map((_, index) => (
                <div key={index} className="py-1">
                  {(index + 1).toString().padStart(2, "0")}
                </div>
              ))}
            </div>

            {/* Code Content */}
            <div className="pl-4 flex-1">
              {codeSnippets[activeTab].map((line, index) => (
                <div
                  key={index}
                  className={`py-1 transition-all duration-500 ${index <= currentLine
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-4"
                    }`}
                >
                  <span className={line.color}>{line.code}</span>
                </div>
              ))}
              <div className="h-4 w-2 bg-blue-400 animate-pulse inline-block"></div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-[#2a2e35] p-4 border-t border-gray-700">
          <div className="font-mono text-sm">
            <div className="text-white mb-1">Output:</div>
            <div className="text-green-400">Welcome to Ed-Flourish 🚀</div>
            <div className="text-blue-400">Forge your knowledge 🔥</div>
            <div className="text-purple-400">Start your journey with us ⭐</div>
          </div>
        </div>
      </div>

      {/* Terminal */}
      <div className="w-full max-w-4xl mt-6 bg-[#1a1e24] rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-[#2a2e35] px-4 py-2 flex justify-between items-center">
          <span className="text-gray-400 text-sm">Terminal</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-gray-400 text-sm">Ready</span>
          </div>
        </div>
        <div className="p-4 font-mono text-sm">
          <div className="text-green-400">
            <div className="flex items-center">
              <span className="text-blue-400">$</span>
              <span className="ml-2">Running welcome script...</span>
            </div>
            <div className="mt-2">Initializing Ed-Flourish environment... ⚡</div>
            <div className="mt-1">Loading learning modules... ✓</div>
            <div className="mt-1 text-emerald-400">Ready to start coding! 🚀</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="py-10">
      <div className="max-w-screen-xl mx-auto text-center text-white px-4">
        <h1 className="text-4xl font-bold mb-2">Why choose us?</h1>
        <p className="text-lg mb-10">
          Unlock Your Potential with Our Comprehensive Learning Approach
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="cursor-pointer bg-[#1c232b] p-6 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold text-pink-600">01</h2>
            <h3 className="text-xl font-semibold text-pink-500 mb-2">
              Heavily Researched
            </h3>
            <p className="text-gray-300">
              Our team has conducted extensive research and gathered
              comprehensive data on Java, Data Structures and Algorithms (DSA),
              Bachelor of Computer Applications (BCA), and Computer Science (CS)
              subjects, providing valuable insights into key areas of study,
              course content, and career opportunities in these fields.
            </p>
          </div>

          <div className="cursor-pointer bg-[#1c232b] p-6 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold text-pink-600">02</h2>
            <h3 className="text-xl font-semibold text-pink-500 mb-2">
              Structured Learning Path
            </h3>
            <p className="text-gray-300">
              Master Data Structures & Algorithms (DSA), System Design, core
              subjects, and practical projects – all through premium blog posts
              and in-depth video solutions.
            </p>
          </div>

          <div className="cursor-pointer bg-[#1c232b] p-6 rounded-lg shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-bold text-pink-600">03</h2>
            <h3 className="text-xl font-semibold text-pink-500 mb-2">
              Unmatched Content Depth
            </h3>
            <p className="text-gray-300">
              We prioritize quality content, offering in-depth explanations and
              a wider range of solved problems in both free and paid courses.
              Our focus is on developing problem-solving skills through
              intuitive video explanations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourceCard = ({ icon, title, description, actionText, actionLink }) => {
  return (
    <div className="bg-[#1c232b] text-white rounded-lg shadow-lg p-6 m-4 border border-gray-600 transition-all duration-300 ease-in-out hover:scale-105 flex flex-col justify-between h-full">
      <div>
        <div className="text-4xl mb-4">{icon}</div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="mb-4">{description}</p>
      </div>
      <a href={actionLink} className="mt-auto">
        <button
          className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#1c232b] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          type="button"
        >
          {actionText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 19"
            className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-[#1c232b] text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
          >
            <path
              className="fill-gray-50 group-hover:fill-gray-50"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            ></path>
          </svg>
        </button>
      </a>
    </div>
  );
};

const ResourceGrid = () => {
  const resources = [
    {
      icon: "🎓",
      title: "BCA Program",
      description: "Explore BCA modules learn and foster your basic learnings",
      actionText: "Learn More",
      actionLink: "/bca",
    },
    {
      icon: "📊",
      title: "DSA Mastery",
      description:
        "Master Data Structures and Algorithms with our in-depth courses and practice problems.",
      actionText: "Start Learning",
      actionLink: "/dsa",
    },
    {
      icon: "☕",
      title: "Java Programming",
      description:
        "Dive into Java programming with hands-on tutorials and real-world projects.",
      actionText: "Begin Coding",
      actionLink: "/java",
    },
    {
      icon: "▶️",
      title: "DBMS Playlist",
      description:
        "Master Databases effortlessly with our curated DSA playlist.",
      actionText: "Watch Now",
      actionLink: "/dbms",
    },
    {
      icon: "💻",
      title: "CS Subjects",
      description: "Demystify CS topics with our easy-to-understand guides.",
      actionText: "Try it free",
      actionLink: "/cs",
    },
    {
      icon: "⏱️",
      title: "CP Sheet",
      description: "Level up your coding game with our practice resources.",
      actionText: "Try it free",
      actionLink: "/cp",
    },
  ];

  return (
    <div className="bg-[#1c232b] py-10">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Our Programs{" "}
      </h2>
      <p className="text-lg text-white text-center mb-12">
        Foster your knowledge with our programs
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
        {resources.map((resource, index) => (
          <ResourceCard
            key={index}
            icon={resource.icon}
            title={resource.title}
            description={resource.description}
            actionText={resource.actionText}
            actionLink={resource.actionLink}
          />
        ))}
      </div>
    </div>
  );
};


const JobCard = ({ title, company, location, description, url, remote }) => (
  <div className="bg-[#2a2f38] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:border hover:border-gray-200">
    <div className="p-6">
      <div className="flex items-center mb-4">
        <FaBriefcase className="text-blue-400 text-2xl mr-2" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-2">
        <span className="font-semibold">Company:</span> {company}
      </p>
      <p className="text-gray-300 mb-2">
        <span className="font-semibold">Location:</span> {location} {remote ? '(Remote)' : ''}
      </p>
      <div
        className="text-gray-300 mb-4"
        dangerouslySetInnerHTML={{ __html: description.substring(0, 100) + '...' }}
      ></div>

      <a href={url} target="_blank" rel="noopener noreferrer">
        <button
          className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-[#1c232b] hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          type="button"
        >
          Apply Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 19"
            className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-[#1c232b] text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
          >
            <path
              className="fill-gray-50 group-hover:fill-gray-50"
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
            ></path>
          </svg>
        </button>
      </a>
    </div>
  </div>
);

const JobSection = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const options = {
        method: 'GET',
        url: 'https://www.arbeitnow.com/api/job-board-api',
        params: {
          page: '1',
          q: 'developer',
          location: 'india',
          remote: 'true',
        },
      };

      try {
        const response = await axios.request(options);
        const jobData = response.data.data || [];
        setJobs(jobData.slice(0, 3)); // Limit to 3 jobs for homepage
        setError(null);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setError('Failed to load job listings. Please try again later.');
        setJobs(mockJobs); // Fallback to mock data
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="bg-[#1c232b] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-2">Explore Job Opportunities</h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          Find exciting developer roles in India or remotely to kickstart your career
        </p>
        {error && <div className="text-red-400 text-center mb-4">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobs.length > 0 ? (
            jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.title || 'Remote Developer'}
                company={job.company_name || 'Tech Corp'}
                location={job.location || 'India'}
                description={job.description || 'Join our team to build cutting-edge applications.'}
                url={job.url || '#'}
                remote={job.remote || false}
              />
            ))
          ) : (
            <div className="text-gray-300 text-center col-span-full">Loading jobs...</div>
          )}
        </div>
        <div className="mt-10 pt-4 text-center">
          <Link
            to="/jobs"
            className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-blue-500 hover:shadow-xl"
          >
            View More Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};



const BlogPost = ({ image, category, title, description, author, date }) => (
  <div className="bg-[#2a2f38] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:border hover:border-gray-200">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-pink-600 mb-2">
        {category}
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
    </div>
  </div>
);

const BlogSection = () => {
  const blogPosts = [
    {
      image:
        "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWl8ZW58MHx8MHx8fDA%3D",
      category: "Article",
      title: "Learn about AI",
      description: "Learn about AI ,why it's important and is it worth it !?",
    },
    {
      image:
        "https://b1490832.smushcdn.com/1490832/wp-content/uploads/2019/02/Install-Arch-Linux-1-1170x731.png?lossy=2&strip=1&webp=1",
      category: "Article",
      title: "Foster your grasp on Arch ",
      description: "Learn about Arch linux ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D",
      category: "Article",
      title: "Mac over windows ?",
      description: "Why you need a mac over  ?!",
    },
  ];

  return (
    <div className="bg-[#1c232b] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer">
        <h2 className="text-4xl font-bold text-white text-center mb-2">
          Our Blog
        </h2>
        <p className="text-xl text-gray-300 text-center mb-12">
          We use an agile approach to test assumptions and connect with the
          needs of your audience early and often.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
      <div className="mt-10 pt-4 text-center">
        <Link to={"/blogs"}
          className="px-6 py-3 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-purple-500 hover:to-blue-500 hover:shadow-xl"
        >
          See More Blogs
        </Link>
      </div>
    </div>
  );
};



const HomeLandPage = () => {


  return (
    <div className="bg-[#0f1319] min-h-screen flex flex-col">
      <NavBarFront />
      <main className="flex-grow">
        <div className="pt-24">
          <Content1 />
        </div>
        <ResourceGrid />
        <WhyChooseUs />
        <JobSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};



export default HomeLandPage;