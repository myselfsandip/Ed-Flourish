import mongoose from "mongoose";

// Problem Schema
const problemSchema = new mongoose.Schema({
    status: { type: Boolean, default: false },
    problem: { type: String, required: true },
    article: { type: String, required: true },
    video: { type: String, required: true },
    difficulty: { type: String, enum: ['Easy', 'Medium', 'Hard'], required: true },
});

// Subject Schema
const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, required: true },
    problems: [problemSchema],  // Directly adding problems here
});

// Semester Schema
const semesterSchema = new mongoose.Schema({
    semesterNumber: { type: Number, required: true },
    subjects: [subjectSchema],
});

// Course Schema
const courseSchema = new mongoose.Schema({
    courseName: { type: String, required: true },
    semesters: [semesterSchema],
});

export const Course = mongoose.model('Course', courseSchema);

// Schema Structure :
// {
//     "courseName": "BCA",
//     "semesters": [
//         {
//             "semesterNumber": 1,
//             "subjects": [
//                 {
//                     "name": "Digital Electronics",
//                     "code": "BCAC101",
//                     "problems": [
//                         {
//                             "status": false,
//                             "problem": "2Sum Problem",
//                             "article": "#",
//                             "video": "#",
//                             "difficulty": "Medium"
//                         },
//                         {
//                             "status": false,
//                             "problem": "Best Time to Buy and Sell Stock",
//                             "article": "#",
//                             "video": "#",
//                             "difficulty": "Hard"
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }

