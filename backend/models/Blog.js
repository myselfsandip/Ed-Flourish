import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  link: {
    type: String,
    required: [true, 'Link is required'],
    trim: true
  }
}, {
  timestamps: true // Adds createdAt and updatedAt fields
});

// Check if the model already exists before creating a new one
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
export default Blog;