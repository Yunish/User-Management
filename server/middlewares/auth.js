const jwt = require("jsonwebtoken");
const generateResponse = require("../utils/responseJson");

const tokenBlackList = [];

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (tokenBlackList.includes(token)) {
      return res
        .status(401)
        .json(generateResponse("Token already Expired!!!", 401));
    }
    if (!token) {
      return res.status(401).json(generateResponse("Unauthorized User", 401));
    }
    token = token.split(" ")[1];
    let user = await jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    if (!user) {
      res.status(400).json(generateResponse("User not found", 400));
    }
    req.userId = user.id;
    next();
  } catch (err) {
    res.status(401).json(generateResponse(null, 401));
  }
};

const logout = (req, res) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json(generateResponse(null, 401));
    }
    if (tokenBlackList.includes(token)) {
      return res
        .status(401)
        .json(generateResponse("Token already Expired!!!", 401));
    }
    tokenBlackList.push(token);
    res.status(200).json(generateResponse("Successfully Logged Out!!!", 200));
  } catch (err) {
    console.log(err);
    return res.status(500).json(generateResponse(null, 500));
  }
};

module.exports = { auth, logout };
