const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const { passwordMatcher } = require("../utils/encryptDecrypt");
const generateResponse = require("../utils/responseJson");

const generateAccessToken = async (userDetails) => {
  const access_token = jwt.sign(
    { email: userDetails.email, id: userDetails._id },
    process.env.TOKEN_SECRET_KEY,
    { expiresIn: "30s" }
  );
  return access_token;
};

const generateRefreshToken = async (userDetails) => {
  const refresh_token = jwt.sign(
    { email: userDetails.email, id: userDetails._id },
    process.env.TOKEN_SECRET_KEY,
    { expiresIn: "5m" }
  );
  return refresh_token;
};

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

    const access_token = await generateAccessToken(userDetails);
    const refresh_token = await generateRefreshToken(userDetails);
    return res
      .status(200)
      .json(generateResponse({ access_token, refresh_token, username }, 200));
  } catch (err) {
    console.log(err);
    res.status(500).json(generateResponse(err, 500));
  }
};

const fetchToken = async (req, res) => {
  const { refresh_token } = req.body;
  jwt.verify(
    refresh_token,
    process.env.TOKEN_SECRET_KEY,
    async (err, decoded) => {
      if (err) {
        return res.status(401).json(generateAccessToken("Token expired", 401));
      }
      const access_token = await generateAccessToken({ id: decoded.userId });
      return res.status(200).json({ access_token, refresh_token });
    }
  );
};

module.exports = { login, fetchToken };
