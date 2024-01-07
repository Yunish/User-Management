const {
  getResponseMessageByStatusCode,
  SUCCESS_STATUS_CODES,
} = require("./httpStatusCodes");

const generateResponse = (resData, resStatus) => {
  const data = resData;
  const status = SUCCESS_STATUS_CODES.includes(resStatus) ? true : false;
  const message = getResponseMessageByStatusCode(resStatus);
  return {
    data,
    status,
    message,
  };
};

module.exports = generateResponse;
