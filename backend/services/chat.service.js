import ai from "./chat.config.js"; 

let chatSessionPromise;

const initializeChat = async () => {
    if (!chatSessionPromise) { 
        const model = ai.getGenerativeModel({ model: "gemini-2.0-flash" });

        chatSessionPromise = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "Hello" }],
                },
                {
                    role: "model",
                    parts: [{ text: "Great to meet you. What would you like to know?" }],
                },
            ],
        });
    }
    return chatSessionPromise;
};

initializeChat();

export const getChatResponse = async (message) => {
    try {
        const chatSession = await initializeChat();
        const result = await chatSession.sendMessage([
            { text: message }
        ]);

        return result.response.text(); 

    } catch (error) {
        console.error("Error getting chat response in service:", error);
        throw error;
    }
};