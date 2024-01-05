const generateCreateAccountEmailTemplate = (
  username = "username",
  email = "yunishshakya@gmail.com",
  password = "samplePassword"
) => {
  return {
    body: {
      name: username,
      intro: "Your Account has been Created!",
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
module.exports = { generateCreateAccountEmailTemplate };
