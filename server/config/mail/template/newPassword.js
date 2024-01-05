const generateNewPasswordTemplate = (
  username = "username",
  email = "yunishshakya@gmail.com",
  password
) => {
  return {
    body: {
      name: username,
      intro: "Your New Password has been set Successfully!",
      table: {
        data: [
          {
            username,
            email,
            password,
          },
        ],
      },
    },
  };
};
module.exports = { generateNewPasswordTemplate };
