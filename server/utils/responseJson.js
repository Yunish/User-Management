const generateStatus = (status) => {
  if (status === 200) {
    return true;
  }
  return false;
};

const generateMessage = (status) => {
  if (status === 200) {
    return "Successfully performed operation!!!";
  } else if (status === 500) {
    return "Server Error!!!";
  }
  return "Failed to perform operation!!!";
};

const generateResponse = (resData, resStatus) => {
  const data = resData;
  const status = generateStatus(resStatus);
  const message = generateMessage(resStatus);
  return {
    data,
    status,
    message,
  };
};

module.exports = generateResponse;
