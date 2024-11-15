import { mailjet } from "./mailjet.config.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";


export async function sendVerificationEmail(userId, email, name, verificationToken) {
    try {
        const request = await mailjet
            .post('send', { version: 'v3.1' })
            .request({
                Messages: [
                    {
                        From: {
                            Email: 'edflourish0@gmail.com',
                            Name: 'ED Flourish'
                        },
                        To: [
                            {
                                Email: email,
                                Name: name
                            }
                        ],
                        Subject: 'Verify your email',
                        HTMLPart: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
                        CustomID: `Verification-${userId}`,
                    }
                ]
            });
    } catch (error) {
        console.error("Full Error Response:", error.response?.data || error); // Log full error response
        throw new Error(`Error sending verification email: ${error}`);
    }
}