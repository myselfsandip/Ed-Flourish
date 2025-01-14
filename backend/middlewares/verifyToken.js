import jwt from 'jsonwebtoken'

export const verifyToken = async (req,res,next) => {
    try {
        const {token} = req.cookies;
        if(!token) return res.status(401).json({success:false,msg:"Unauthorized - no token provided"});

        //JWT Token Verification
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded) return res.status(401).json({success:false,msg:"Unauthorized - invalid token"});

        //If everything is Ok then store the userid to the req from the jwt body
        req.userId = decoded.userId;
        return next();
    } catch (error) {
        return res.status(500).json({success:false,msg:"Internal Server Error"});
    }
}