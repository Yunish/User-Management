const userModel = require("../model/userModel");
const generateResponse = require("../utils/responseJson");

const initController = async (req, res) => {
  try {
    const { userId } = req;
    const userDetails = await userModel.findOne({
      _id: userId,
    });
    res.status(200).json(generateResponse(userDetails, 200));
  } catch (err) {
    console.log(err);
    return res.status(500).json(generateResponse(null, 500));
  }
};

module.exports = initController;
