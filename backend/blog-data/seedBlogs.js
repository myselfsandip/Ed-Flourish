import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import Blog from "../models/Blog.js"; // Your schema

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, "../.env") });

// Verify environment variable
if (!process.env.MONGO_URL) {
  console.error("MONGO_URL is not defined in environment variables");
  process.exit(1);
}

const blogData = [
  {
    title: "Exploring the Power of Next.js",
    description: "Discover how Next.js can supercharge your React applications with server-side rendering and static site generation.",
    image: "https://via.placeholder.com/300x200?text=Next.js",
    link: "https://nextjs.org/",
  },
  {
    title: "The Future of JavaScript: ES2025",
    description: "An in-depth look at the upcoming features in ES2025 and how they will shape modern JavaScript development.",
    image: "https://via.placeholder.com/300x200?text=JavaScript+ES2025",
    link: "https://tc39.es/",
  },
  {
    title: "Building Scalable Apps with MongoDB",
    description: "Learn how to use MongoDB's flexible schema design to build scalable applications for any use case.",
    image: "https://via.placeholder.com/300x200?text=MongoDB",
    link: "https://www.mongodb.com/",
  },
];

async function seedBlogs() {
  try {
    // Connect to MongoDB
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully.");

    // Clear existing data
    const deletedBlogs = await Blog.deleteMany({});
    console.log(`Cleared ${deletedBlogs.deletedCount} existing blogs.`);

    // Insert seed data
    const insertedBlogs = await Blog.insertMany(blogData);
    console.log(`Successfully seeded ${insertedBlogs.length} blogs.`);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  } finally {
    // Close database connection
    await mongoose.disconnect();
    console.log("Database connection closed.");
  }
}

// Run the seed function
seedBlogs();
