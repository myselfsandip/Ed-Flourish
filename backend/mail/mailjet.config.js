import Mailjet from "node-mailjet";
import dotenv from "dotenv";
dotenv.config();


export const mailjet = new Mailjet({
    apiKey:process.env.MAILJET_API_KEY,
    apiSecret:process.env.MAILJET_SECRET_KEY
})