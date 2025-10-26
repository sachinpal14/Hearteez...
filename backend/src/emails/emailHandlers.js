import { resendClient, sender } from "../lib/resend.js";
import { createWelcomeEmailTemplate } from "./emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  // For testing, send to your email instead
  const testEmail = process.env.NODE_ENV === "production" 
    ? email 
    : "sachinpalsp1402@gmail.com";

  const { data, error } = await resendClient.emails.send({
    from: `${sender.name} <${sender.email}>`,
    to: testEmail, // ✅ Changed
    subject: "Welcome to Chatify!",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

  if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome Email sent successfully", data);
};