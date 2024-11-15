import {User} from "../models/userModel.js";
import { userRegisterSchema } from "../utils/zodSchema.js";
import bcrypt from "bcrypt";

import {genarateTokenAndSetCookie} from "../utils/genarateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../mail/emails.js";

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
        const hashedPassword = await bcrypt.hash(password,12);
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            selectedCourse:course,
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
        return res.status(400).json({ success: false, msg: error.message })
    }
}


export const login = async (req, res) => {
    res.json({ success: true, msg: "Login Route" })
}

