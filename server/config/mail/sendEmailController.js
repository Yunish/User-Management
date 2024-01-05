const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const { generateCreateAccountEmailTemplate } = require("./template/register");
const THEMES = require("./generic/themes");
const generateResponse = require("../../utils/responseJson");
const { copyright } = require("./generic/copyright");

const sendEmail = async (userEmail, emailContent) => {
  let config = {
    service: "gmail",
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PW,
    },
  };

  let transporter = nodemailer.createTransport(config);

  let MailGenerator = new Mailgen({
    theme: THEMES.DEFAULT,
    product: {
      name: "User Management",
      link: "https://mailgen.js/",
      copyright: copyright,
    },
  });

  let mail = MailGenerator.generate(emailContent);

  let message = {
    from: process.env.MAIL_ADDRESS,
    to: userEmail,
    subject: "Account Created Successfully!!!",
    html: mail,
  };

  await transporter.sendMail(message);
};

const checkEmail = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await sendEmail(
      email,
      generateCreateAccountEmailTemplate(username, email, password)
    );
    res.status(200).json({ username, email, password });
  } catch (err) {
    console.log(err);
    res.status(500).json(generateResponse(err, 500));
  }
};
module.exports = { sendEmail, checkEmail };
