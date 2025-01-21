import express from "express";

import { login, register, verifyEmail, logout, forgotPassword, resetPassword, checkAuth } from "../controllers/authControllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";


const router = express.Router();

router.post('/register', register);
router.post('/verify_email', verifyEmail);
router.post("/login", login);
router.post("/logout", logout);
router.post("/forgot_password", forgotPassword);
router.post("/reset_password", resetPassword);
router.post("/check_auth", verifyToken, checkAuth);




export default router;