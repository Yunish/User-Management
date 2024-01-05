const generator = require("generate-password");
const generateResponse = require("./responseJson");

const generatePassword = generator.generate({
  length: 10,
  symbols: true,
  lowercase: true,
  uppercase: true,
  excludeSimilarCharacters: true,
  numbers: true,
});

module.exports = { generatePassword };
