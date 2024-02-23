const nodemailer = require('nodemailer');

const mailSender = async (email, title, body) => {
  try {
    // Create a Transporter to send emails
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      // logger: true, // Enable logging
      // debug: true, // Enable debug output
    });

    // Send emails to users
    let info = await transporter.sendMail({
      from: 'www.tarat.me',
      to: email,
      subject: title,
      html: body,
    });
    // console.log("Email info: ", info);
    return info;
  } catch (error) {
    console.log("error from mail util", error);
    return error
  }
};
export default { mailSender };
