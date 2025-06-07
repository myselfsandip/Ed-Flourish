import { getChatResponse } from '../services/chat.service.js';

export const handleChat = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                msg: "Message is required in the request body."
            });
        }

        const chatResponse = await getChatResponse(message);

        return res.status(200).json({
            success: true,
            response: chatResponse
        });

    } catch (error) {
        console.error("Error in handleChat:", error);
        return res.status(500).json({
            success: false,
            msg: "Internal Server Error during chat processing."
        });
    }
};