const generateChangePasswordTemplate = (
  username = "username",
  email = "yunishshakya@gmail.com"
) => {
  return {
    body: {
      name: username,
      intro: "Your Password has been changed Successfully!",
      table: {
        data: [
          {
            username,
            email,
          },
        ],
      },
    },
  };
};
module.exports = { generateChangePasswordTemplate };
