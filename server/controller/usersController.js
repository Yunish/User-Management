const userModel = require("../model/userModel");
const generateResponse = require("../utils/responseJson");
const { sendEmail } = require("../config/mail/sendEmailController");
const { generatePassword } = require("../utils/generatePassword");
const { encryptPassword } = require("../utils/encryptDecrypt");
const {
  generateCreateAccountEmailTemplate,
} = require("../config/mail/template/register");

const createUser = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      contactNumber,
      address,
      username,
      email,
      userType,
    } = req.body;

    const tempPassword = generatePassword;
    const encryptedPassword = await encryptPassword(generatePassword);
    const user = new userModel({
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      contactNumber,
      address,
      username,
      email,
      userType: userType ?? "External",
      isActive: false,
      firstLogin: true,
      hashedPassword: encryptedPassword,
    });

    if (
      !firstName ||
      !lastName ||
      !dateOfBirth ||
      !contactNumber ||
      !address ||
      !username ||
      !email
    ) {
      return res
        .status(400)
        .json(generateResponse("Please fill all the required fields", 400));
    }
    const usernameExists = await userModel.findOne({ username });
    const emailExists = await userModel.findOne({ email });
    if (usernameExists) {
      return res
        .status(400)
        .json(generateResponse(`Username already exists`, 400));
    }
    if (emailExists) {
      return res
        .status(400)
        .json(generateResponse(`Email already exists`, 400));
    }

    await sendEmail(
      email,
      generateCreateAccountEmailTemplate(username, email, tempPassword)
    );
    await user.save();
    res
      .status(200)
      .json(generateResponse({ username, email, password: tempPassword }, 200));
  } catch (err) {
    console.log(err);
    res.status(500).json(generateResponse(err, 500));
  }
};

const updateUser = async (req, res) => {
  try {
    const {
      _id,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      contactNumber,
      address,
      username,
      email,
      userType,
      hashedPassword,
    } = req.body;

    if (
      !firstName ||
      !lastName ||
      !dateOfBirth ||
      !contactNumber ||
      !address ||
      !username ||
      !email
    ) {
      return res
        .status(400)
        .json(generateResponse("Please fill all the required fields", 400));
    }
    const updatedUser = await userModel.findOneAndUpdate({
      _id,
      firstName,
      middleName,
      lastName,
      dateOfBirth,
      contactNumber,
      address,
      username,
      email,
      userType,
      hashedPassword,
    });
    if (!updatedUser) {
      return res.status(404).json(generateResponse(`User not found`, 404));
    }
    res.status(200).json(generateResponse(updatedUser, 200));
  } catch (err) {
    res.status(500).json(generateResponse(err, 500));
  }
};

const getUsers = async (req, res) => {
  console.log(req.userId);
  try {
    const userList = await userModel.find();
    res.status(200).json(generateResponse(userList, 200));
  } catch (err) {
    res.status(500).json(generateResponse(err, 500));
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userList = await userModel.findById(id);
    res.status(200).json(generateResponse(userList, 200));
  } catch (err) {
    res.status(500).json(generateResponse(err, 500));
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userList = await userModel.findByIdAndDelete(id);
    res.status(200).json(generateResponse(userList, 200));
  } catch (err) {
    res.status(500).json(generateResponse(err, 500));
  }
};

module.exports = { createUser, getUsers, deleteUser, getUser, updateUser };
