import express from "express";
const router = express.Router();
import {Course} from "../models/courseModel.js";


router.get("/", async(req,res) => {
    try {
        const course = await Course.find({});
        if(!course){
            throw new Error('Error getting Course data from Course');
        }
        res.json({success:true,msg:"Successfull",data:course});
    } catch (error) {
        console.log("Error Occured : " , error);
        res.json({success:false,msg:error.message});
    }
});


export default router;