import express from "express";
const router = express.Router();
import { Course } from "../models/courseModel.js";

router.get("/", async (req, res) => {
    try {
        const courses = await Course.find({});
        if (!courses || courses.length === 0) {
            throw new Error('No courses found');
        }
        res.json({ success: true, msg: "Successful", data: courses });
    } catch (error) {
        console.log("Error Occurred: ", error);
        res.status(500).json({ success: false, msg: error.message });
    }
});

export default router;