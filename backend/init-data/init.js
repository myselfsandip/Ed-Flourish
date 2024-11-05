// import { Course } from './models/courseModel.js';
// import { dummyData } from './init-data/data.js';
// app.post('/admin', async (req, res) => {
//     try {
//         await Course.deleteMany({});
//         await Course.insertMany(dummyData);
//         console.log("Database seeded successfully with BCA and BBA courses!");
//         res.json({success:true});
//     } catch (error) {
//         console.log('Data insertion Failed');
//         res.json({success:false});
//     }
// })