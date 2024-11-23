import {User} from "../models/userModel.js";
import {Course} from "../models/courseModel.js";
import { userRegisterSchema , userLoginSchema} from "../utils/zodSchema.js";
import bcrypt from "bcrypt";

import {genarateTokenAndSetCookie} from "../utils/genarateTokenAndSetCookie.js";
import { sendVerificationEmail, sendWelcomeEmail } from "../mail/emails.js";

export const register = async (req,res) => {
    try {
        const parsedPayload = userRegisterSchema.safeParse(req.body);
        if(!parsedPayload.success){
            return res.status(400).json({success:false,msg:"Invalid Credentials!"});
        }
        const {name,email,password,course} = req.body;
        const userExists = await User.findOne({email});
        if (userExists) {
            return res.status(400).json({ success: false, msg: "User already exists!" });
        }

        // Case-Formatting Course
        const formattedCourse = course.toUpperCase();

        // Find the Course
        const selectedCourse = await Course.findOne({courseName:formattedCourse});
        if(!selectedCourse){
            return res.status(404).json({success : false , msg: "Course not found!"});
        }

        const hashedPassword = await bcrypt.hash(password,12);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();  // 6 digit Verification Token
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            selectedCourse:selectedCourse._id,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
        });
        //JWT
        genarateTokenAndSetCookie(res,user._id);
        // Send mail
        sendVerificationEmail(user._id,email,name,verificationToken);

        return res.status(201).json({
            msg: "User Created Successfully!",
            success: true,
            user: {
                ...user._doc,
                password: undefined
            }
        });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ success: false, msg: "Internal Server Error"});
    }
}


export const verifyEmail = async(req,res) => {
    try {
        const {code} = req.body;
        if(!code){
            return res.status(400).json({success:false,msg:"Invalid Credentials"});
        }
        const user = await User.findOne({
            verificationToken:code,
            verificationTokenExpiresAt: {$gt: Date.now()}
        });
        if(!user){
            return res.status(400).json({success:false,msg:"Invalid or expired verification code" });
        }
        // Update User
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();
        // Send Welcome Email
        sendWelcomeEmail(user.email,user.name);
        // Send Success Responce 
        return res.status(201).json({
            success:true,
            msg:"Email Verification Successfull!",
            user:{
                ...user._doc,
                password:undefined
            }
        })
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({success:false,msg:"Internal Server Error"});
    }
}


export const login = async (req, res) => {
    try {
        const parsedPayload = userLoginSchema.safeParse(req.body);
        if(!parsedPayload.success){
            res.status(400).json({success:false,msg:"Invalid Credentials"});
        }
        const {email,password} = req.body;
        
    } catch (error) {
        console.log(error.message);
        res.status(400).json({success:false,msg:"Internal Server Error"});
    }
}

