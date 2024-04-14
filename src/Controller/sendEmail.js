import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  services: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "levantrung14032004@gmail.com",
    pass: "gzyzwieyhlztlagl",
  },
});

async function sendEmail(email) {
  const info = await transporter.sendMail({
    from: `"Maddison Foo Koch 👻" <${email}>`,
    to: "trungm8fordev@gmail.com",
    subject: "Hello Tao la Hacker",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

sendEmail().catch(console.error);

export default sendEmail;
