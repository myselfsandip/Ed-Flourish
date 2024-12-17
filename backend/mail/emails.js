import { mailjet } from "./mailjet.config.js";
import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates.js";


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

export async function sendWelcomeEmail(email, name) {
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
                        Subject: `Welcome ${name}`,
                        HTMLPart: WELCOME_EMAIL_TEMPLATE,
                    }
                ]
            });
    } catch (error) {
        console.error("Full Error Response:", error.response?.data || error); // Log full error response
        throw new Error(`Error sending verification email: ${error}`);
    }
}



export const sendPasswordResetEmail = async (email, resetURL) => {
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
                            }
                        ],
                        Subject: ` Reset Password`,
                        HTMLPart: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetURL),
                    }
                ]
            });
        console.log("Password Reset Email Send Successfully!");
    } catch (error) {
        console.error("Full Error Response:", error.response?.data || error); // Log full error response
        throw new Error(`Error sending welcome email: ${error}`);
    }
}

export const sendResetSuccessEmail = async (email) => {
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
                            }
                        ],
                        Subject: `Password Reset Successfull`,
                        HTMLPart: PASSWORD_RESET_SUCCESS_TEMPLATE,
                    }
                ]
            });
        console.log("Password Reset Successfully!");
    } catch (error) {
        console.error("Full Error Response:", error.response?.data || error); // Log full error response
        throw new Error(`Error sending welcome email: ${error}`);
    }
}