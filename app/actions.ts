"use server"

import nodemailer from "nodemailer"

export async function sendContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string
  const phone = formData.get("phone") as string // Changed from email to phone
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  // Updated validation to check for phone instead of email
  if (!name || !phone || !subject || !message) {
    return { success: false, message: "All fields are required." }
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS, // App Password from Google
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER, // Sending from your configured Gmail user
      to: process.env.GMAIL_USER,
      subject: `Contact Form: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p> {/* Changed to Phone */}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("Email error:", error)
    return {
      success: false,
      message: "Failed to send the message. Please try again later.",
    }
  }
}
