const jwt = require("jsonwebtoken");
const generateResponse = require("../utils/responseJson");

const auth = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (!token) {
      return res.status(401).json(generateResponse("Unauthorized User", 401));
    }
    token = token.split(" ")[1];
    let user = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    req.userId = user.id;
    next();
  } catch (err) {
    res.status(401).json(generateResponse("Unauthorized User", 401));
  }
};

module.exports = auth;
