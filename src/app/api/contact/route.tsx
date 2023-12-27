import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

export async function POST(request: NextRequest) {
  try {
    const {name, email, subject, message} = await request.json();
    if (!name || !email || !subject || !message) {
      return NextResponse.json({message: "Invalid request"}, {status: 400});
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASSWORD
      }
    })

    const mailOption = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: subject,
      html: `
        <li> title: ${subject}</li>
        <li> name: ${name}</li>    
        <li> email: ${email}</li>    
        <li> message: ${message}</li> 
        `
    }
    await transporter.sendMail(mailOption)

    return NextResponse.json({message: "Email Sent Successfully"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Failed to Send Email"}, {status: 500})
  }
}