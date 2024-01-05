const userModel = require("../model/userModel");
const { passwordMatcher } = require("../utils/encryptDecrypt");
const generateResponse = require("../utils/responseJson");

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDetails = await userModel.findOne({
      username,
    });
    if (!userDetails) {
      return res
        .status(400)
        .json(generateResponse("Username not matched!!!", 400));
    }

    const checker = await passwordMatcher(password, userDetails.hashedPassword);
    if (!checker) {
      return res
        .status(400)
        .json(generateResponse("Password not matched!!!", 400));
    }
    return res
      .status(200)
      .json(generateResponse("Logged in Successfully!!!", 200));
  } catch (err) {
    console.log(err);
    res.status(500).json(generateResponse(err, 500));
  }
};

module.exports = login;
