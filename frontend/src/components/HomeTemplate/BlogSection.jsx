import { useState, useEffect } from 'react';

const BlogPost = ({ image, title, description, link }) => (
  <div className="bg-[#2a2f38] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:border hover:border-gray-200">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-pink-600 mb-2">
        Article
      </span>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-pink-600 hover:text-pink-500"
      >
        Read More →
      </a>
    </div>
  </div>
);

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('your_api_endpoint/blogs'); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#1c232b] py-16">
        <div className="text-white text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#1c232b] py-16">
        <div className="text-red-500 text-center">Error: {error}</div>
      </div>
    );
  }

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
          {blogPosts.map((post) => (
            <BlogPost
              key={post._id} // MongoDB documents have _id field
              image={post.image}
              title={post.title}
              description={post.description}
              link={post.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

// import { useState, useEffect } from 'react';

// const BlogPost = ({ image, title, description, link }) => (
//   <div className="bg-[#2a2f38] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:border hover:border-gray-200">
//     <img src={image} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-6">
//       <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-pink-600 mb-2">
//         ARTICLE
//       </span>
//       <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
//       <p className="text-gray-300 mb-4">{description}</p>
//       <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-pink-600 hover:text-pink-500"
//       >
//         Read More →
//       </a>
//     </div>
//   </div>
// );

// const BlogSection = () => {
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await fetch('/api/blogs');
//         if (!response.ok) throw new Error('Failed to fetch blogs');
//         const data = await response.json();
//         setBlogPosts(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) return <div className="bg-[#1c232b] py-16 text-white text-center">Loading...</div>;
//   if (error) return <div className="bg-[#1c232b] py-16 text-red-500 text-center">Error: {error}</div>;

//   return (
//     <div className="bg-[#1c232b] py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-white text-center mb-2">
//           Our Blog
//         </h2>
//         <p className="text-xl text-gray-300 text-center mb-12">
//           We use an agile approach to test assumptions and connect with the needs of your audience early and often.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <BlogPost
//               key={post._id}
//               image={post.image}
//               title={post.title}
//               description={post.description}
//               link={post.link}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogSection;