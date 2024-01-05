const { sendEmail } = require("../config/mail/sendEmailController");
const {
  generateChangePasswordTemplate,
} = require("../config/mail/template/changePassword");
const {
  generateNewPasswordTemplate,
} = require("../config/mail/template/newPassword");
const userModel = require("../model/userModel");
const { encryptPassword, passwordMatcher } = require("../utils/encryptDecrypt");
const { generatePassword } = require("../utils/generatePassword");
const generateResponse = require("../utils/responseJson");

const checkPasswordMatch = async (req, res) => {
  const { username, oldPassword } = req.body;
  try {
    const userDetails = await userModel.findOne({
      username,
    });
    if (!userDetails) {
      return res.status(404).json(generateResponse("User not found", 404));
    }
    const checker = await passwordMatcher(
      oldPassword,
      userDetails.forgotPassword
    );
    await res.status(200).json(generateResponse(checker, 200));
  } catch (err) {
    console.log(err);
    res.status(500).json(generateResponse(err, 500));
  }
};

const changePassword = async (req, res) => {
  const { username, oldPassword, newPassword, reset } = req.body;
  try {
    const userDetails = await userModel.findOne({
      username,
    });
    if (!userDetails) {
      return res.status(404).json(generateResponse("User not found", 404));
    }

    const checker = await passwordMatcher(
      oldPassword,
      reset ? userDetails.forgotPassword : userDetails.hashedPassword
    );
    if (!checker) {
      return res.status(400).json(
        generateResponse(
          {
            oldPassword: oldPassword,
            forgotPassword: userDetails.forgotPassword,
            hashedPassword: userDetails.hashedPassword,
          },
          400
        )
      );
    }

    const encryptedPassword = await encryptPassword(newPassword);
    const updatePassword = await userModel.findByIdAndUpdate(
      userDetails._id,
      {
        hashedPassword: encryptedPassword,
        firstLogin: false,
        forgotPassword: "",
      },
      { new: true }
    );
    sendEmail(
      userDetails.email,
      generateChangePasswordTemplate(userDetails.username, userDetails.email)
    );
    return res.status(200).json(generateResponse(updatePassword, 200));
  } catch (err) {
    console.log(err, "err");
    return res.status(500).json(generateResponse(err, 500));
  }
};

const randomPasswordGenerator = (req, res) => {
  try {
    res.status(200).json(generateResponse(generatePassword, 200));
  } catch (err) {
    res.status(500).json(generateResponse(err, 500));
  }
};

const encryptPasswordGenerator = async (req, res) => {
  const { password } = req.body;
  try {
    await res
      .status(200)
      .json(generateResponse(await encryptPassword(password), 200));
  } catch (err) {
    res.status(500).json(generateResponse(err, 500));
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const newPassword = generatePassword;
    const user = await userModel.findOne({ email });
    const encryptedPassword = await encryptPassword(newPassword);
    const updatePassword = await userModel.findByIdAndUpdate(
      user._id,
      {
        forgotPassword: encryptedPassword,
        firstLogin: false,
      },
      { new: true }
    );
    await sendEmail(
      user.email,
      generateNewPasswordTemplate(user.username, user.email, newPassword)
    );
    await res.status(200).json(generateResponse(encryptedPassword, 200));
  } catch (err) {
    console.log(err);
    res.status(500).json(generateResponse(err, 500));
  }
};

module.exports = {
  randomPasswordGenerator,
  encryptPasswordGenerator,
  changePassword,
  forgotPassword,
  checkPasswordMatch,
};
