import { User } from "../models/userModel.js";
import { Course } from "../models/courseModel.js";
import { userRegisterSchema, userLoginSchema, resetPaswordSchema } from "../utils/zodSchema.js";
import bcrypt from "bcrypt";

import { genarateTokenAndSetCookie } from "../utils/genarateTokenAndSetCookie.js";
import { sendResetSuccessEmail, sendVerificationEmail, sendWelcomeEmail } from "../mail/emails.js";

//Registration
export const register = async (req, res) => {
    console.log('reg entered')
    try {
        const parsedPayload = userRegisterSchema.safeParse(req.body);
        if (!parsedPayload.success) {
            return res.status(400).json({ success: false, msg: "Invalid Credentials!" });
        }
        const { name, email, password, course } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ success: false, msg: "User already exists!" });
        }

        // Case-Formatting Course
        const formattedCourse = course.toUpperCase();

        // Find the Course
        const selectedCourse = await Course.findOne({ courseName: formattedCourse });
        if (!selectedCourse) {
            return res.status(404).json({ success: false, msg: "Course not found!" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();  // 6 digit Verification Token
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            selectedCourse: selectedCourse._id,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
        });
        //JWT
        const token = await genarateTokenAndSetCookie(res, user._id);
        // Send mail
        sendVerificationEmail(user._id, email, name, verificationToken);

        return res.status(200).json({
            msg: "User Created Successfully!",
            success: true,
            user: {
                ...user._doc,
                password: undefined
            },
            token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
}

//Verify email
export const verifyEmail = async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) {
            return res.status(400).json({ success: false, msg: "Invalid Credentials" });
        }
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() }
        });
        if (!user) {
            return res.status(400).json({ success: false, msg: "Invalid or expired verification code" });
        }
        // Update User
        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();
        // Send Welcome Email
        sendWelcomeEmail(user.email, user.name);
        // Send Success Responce 
        return res.status(201).json({
            success: true,
            msg: "Email Verification Successfull!",
            user: {
                ...user._doc,
                password: undefined
            }
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
}

//Resend OTP
export const resendOtp = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ success: false, msg: "Email is required" });

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ success: false, msg: "User not found!" });

        // Check if user is already verified
        if (user.isVerified) {
            return res.status(400).json({ success: false, msg: "User is already verified" });
        }

        // Generate new verification token
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        // Update user with new token and expiration
        user.verificationToken = verificationToken;
        user.verificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
        await user.save();

        // Resend verification email
        sendVerificationEmail(user._id, email, user.name, verificationToken);

        return res.status(200).json({
            success: true,
            msg: "New verification OTP sent successfully"
        });

    } catch (error) {
        console.error('Resend OTP Error:', error);
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error"
        });
    }
}

//Login
export const login = async (req, res) => {
    try {
        const parsedPayload = userLoginSchema.safeParse(req.body);
        if (!parsedPayload.success) {
            res.status(400).json({ success: false, msg: "Invalid Credentials" });
        }
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user || !user.isVerified) {
            return res.status(404).json({ success: false, msg: "User not found or not Verified!" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ success: false, msg: "Invalid Password!" });
        }
        const token = await genarateTokenAndSetCookie(res, user._id);
        user.lastLogin = Date.now();
        await user.save();

        res.status(201).json({
            success: true, msg: "Logged in Successfully", user: {
                ...user._doc,
                password: undefined
            },
            token
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
}

// Logout
export const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(201).json({ success: true, msg: "Logged out Successfully" });
    } catch (error) {
        console.log("Error Happend :", error);
        res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
}

//Forgot Pass Route
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ success: false, msg: "Inavalid Credentials" });

    } catch (error) {
        return res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
}

//Reset Password Route
export const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { password } = req.body;
        const { success } = resetPaswordSchema.safeParse({ token, password });
        if (!success) return res.status(400).json({ success: false, msg: "Invalid Credentials" });

        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpiresAt: { $gt: Date.now() } });
        if (!user) return res.status(400).json({ success: false, msg: "Inavlid or expired reset token!" });

        //Store Password in DB
        const hashedPassword = await bcrypt.hash(password, 12);
        user.password = hashedPassword;
        //Make resetPasswordToken & resetPasswordExpiresAt Empty
        user.resetPasswordToken = undefined;
        user.resetPasswordExpiresAt = undefined;
        await user.save();

        //Send Success Reset Pass Mail
        await sendResetSuccessEmail(user.email);
        return res.status(201).json({
            success: true,
            msg: "Password Reset Successfull!",
            user: {
                ...user._doc,
                password: undefined
            }
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
}

//Check User Auth
export const checkAuth = async (req, res) => {
    try {
        const userId = req.userId;
        if (!userId) return res.status(401).json({ success: false, msg: "User ID is required" });

        //Find the User
        const user = await User.findOne({_id:userId}).select("-password");
        if(!user) return res.status(401).json({success:false,msg:"Invalid User"});
        return res.status(201).json({success:true,msg:"Auth Successfull",user});
    } catch (error) {
        return res.status(500).json({ success: false, msg: "Internal Server Error" });
    }
}
