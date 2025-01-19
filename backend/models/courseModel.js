import mongoose from "mongoose";

// Problem Schema for Both Skill-Based and College Courses
const problemSchema = new mongoose.Schema({
    status: { type: Boolean, default: false },  // Marks if the problem is available or solved
    module: { type: String, required: true },   // Module related to the problem
    notes: { type: String, required: true },    // Link to the notes
    video: { type: String, required: true },    // Link to the video
    practiceLink: { type: String, default: '' }, // Optional practice link for skill-based courses
});

// College-Based Course Schema for Semester and Year-Based Organization
const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    problems: [problemSchema],  // List of problems in the subject
});

// College Course Schema (Dynamic, Based on Various Courses Like BCA, BBA)
const semesterSchema = new mongoose.Schema({
    year: { type: Number, required: true },     // Year of the course (e.g., 1st, 2nd)
    semesterNumber: { type: Number, required: true },  // Semester number (e.g., 1, 2)
    subjects: [subjectSchema],  // Subjects for the given semester
});

// College Course Schema (Can Be BCA, BBA, etc.)
const collegeCourseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },  // Name of the college course (e.g., BCA, BBA)
    semesters: [semesterSchema],  // List of semesters for this course
});

// Skill-Based Course Schema (Doesn't Use Semesters, Just Subjects)
const skillBasedCourseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },  // Name of the skill-based course (e.g., DBMS, DSA)
    subjects: [subjectSchema],  // List of subjects for the skill-based course
});

// Main Course Schema to Differentiate Between College-Based and Skill-Based Courses
const courseSchema = new mongoose.Schema({
    courseType: { type: String, enum: ['College', 'Skill'], required: true }, // Type of course: College or Skill
    collegeCourseDetails: collegeCourseSchema,  // Only for college courses
    skillBasedCourseDetails: skillBasedCourseSchema, // Only for skill-based courses
});

export const Course = mongoose.model('Course', courseSchema);
