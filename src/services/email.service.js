import boom from "@hapi/boom";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { email, emailWithButton } from "../tools/build";

dotenv.config();

class LoginService {
  constructor() {}

  async sendEmail(data) {
    const {
      subject,
      logoURL,
      remitterName,
      recieverEmails,
      title,
      body,
      buttonLink,
      buttonText,
      footer,
      legal,
    } = data;

    let testAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    let html = "";
    
    if (buttonLink) {
      html = emailWithButton({
        title,
        logoURL,
        subject,
        body,
        buttonLink,
        buttonText,
        footer,
        legal,
      });
    } else {
      html = email({
        title,
        logoURL,
        subject,
        body,
        footer,
        legal,
      });
    }

    const obj = await transporter.sendMail({
      from: `"${remitterName}" <${process.env.EMAIL_USER}>`,
      to: `${recieverEmails}`,
      subject,
      text: body,
      html,
    });

    if(!obj){
      throw boom.conflict()
    }

    return obj;
  }
}

export default LoginService;
