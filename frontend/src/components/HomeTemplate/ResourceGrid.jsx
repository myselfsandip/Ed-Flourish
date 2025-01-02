import React from "react";

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
      title: "DSA Playlist",
      description:
        "Master algorithms effortlessly with our curated DSA playlist.",
      actionText: "Watch Now",
      actionLink: "/dsa",
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

export default ResourceGrid;
