const bcrypt = require("bcrypt");

const encryptPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
  } catch (error) {
    console.log("Error hashing password:", error);
    throw error; // Rethrow the error for further handling
  }
};

const passwordMatcher = async (enteredPassword, hashedPassword) => {
  try {
    const checkPassword = await bcrypt.compare(enteredPassword, hashedPassword);
    return checkPassword;
  } catch (error) {
    console.error("Error matching password:", error);
    throw error; // Rethrow the error for further handling
  }
};
module.exports = { encryptPassword, passwordMatcher };
