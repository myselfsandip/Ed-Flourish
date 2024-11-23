import express from "express";


import { login,register , verifyEmail} from "../controllers/authControllers.js";


const router = express.Router();

router.post('/register',register);
router.post('/verify_email',verifyEmail);
router.post("/login", login);
router.get("/login", login);




export default router;