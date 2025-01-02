import React from "react";

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

export default WhyChooseUs;
