import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    let {name, email, subject, message} = await request.json();
    message = message.replace(/\n/g, '<br>'); // Replace newlines with <br> tags to preserve the formatting of the user input

    let missingFields = {name: false, email: false, subject: false, message: false};
    if (!name) {
      missingFields.name = true;
    }
    if (!email) {
      missingFields.email = true;
    }
    if (!subject) {
      missingFields.subject = true;
    }
    if (!message) {
      missingFields.message = true;
    }
    if (Object.values(missingFields).some(value => value)) {
      return NextResponse.json(missingFields, {status: 400});
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
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <title></title>
            <meta charset="utf-8"/>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <style>
              body {
                font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
                margin: 0;
                padding: 0;
                width: 100%;
                background: #fff;
              }
          
              .wrapper {
                max-width: 500px;
                margin: auto;
              }
          
              .responsive-table {
                width: 100%;
              }
          
              .section-padding {
                padding: 10px 15px 30px 15px;
              }
          
              .form-container {
                margin-bottom: 24px;
                padding: 20px;
                border: 1px dashed #ccc;
              }
          
              .form-heading {
                color: #2a2a2a;
                font-weight: 400;
                text-align: left;
                line-height: 20px;
                font-size: 18px;
                margin: 0 0 8px;
              }
          
              .form-answer {
                color: #2a2a2a;
                font-weight: 300;
                text-align: left;
                line-height: 20px;
                font-size: 16px;
                margin: 0 0 24px;
              }
          
              @media screen and (max-width: 525px) {
                .wrapper {
                  width: 100%;
                  max-width: 100%;
                }
          
                .padding {
                  padding: 10px 5% 15px 5%;
                }
          
                .section-padding {
                  padding: 0 15px 50px 15px;
                }
              }
            </style>
          </head>
          <body>
          <div class="wrapper">
            <div class="section-padding">
              <div class="responsive-table">
                <div class="form-container">
                  <h2>${subject}</h2>
                  <div>
                    <h3 class="form-heading">From:</h3>
                    <p class="form-answer">${name}</p>
                    <h3 class="form-heading">Email:</h3>                    
                    <p class="form-answer">${email}</p>
                    <h3 class="form-heading">Message:</h3>
                    <p class="form-answer">${message}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </body>
          </html>          
        `
    }
    await transporter.sendMail(mailOption)

    return NextResponse.json({message: "Email Sent Successfully"}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: "Failed to Send Email"}, {status: 500})
  }
}