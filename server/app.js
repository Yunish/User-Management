const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

require("dotenv").config();

const userRoutes = require("./routes/usersRoutes");
const { checkEmail } = require("./config/mail/sendEmailController");
const {
  randomPasswordGenerator,
  encryptPasswordGenerator,
  changePassword,
  forgotPassword,
  checkPasswordMatch,
} = require("./controller/passwordController");
const { login, fetchToken } = require("./controller/loginController");
const swaggerOptions = require("./utils/swagger/options");

const app = express();

// Setup Swagger
const specs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());
app.use(cors());

// route config
app.use("/api/v1/user", userRoutes);

app.post("/api/v1/login", login);
app.post("/api/v1/fetch-token", fetchToken);
app.post("/api/v1/sendEmail", checkEmail);
app.get("/api/v1/generate-password", randomPasswordGenerator);
app.post("/api/v1/encrypt-password", encryptPasswordGenerator);
app.post("/api/v1/change-password", changePassword);
app.post("/api/v1/forgot-password", forgotPassword);
app.post("/api/v1/check-password", checkPasswordMatch);

// creating server
const initServer = () => {
  app.listen(process.env.PORT, (req, res) => {
    console.log("Welcome to User management");
  });
};

// connect mongo db
const initMongooseDetails = () => {
  const mongooseUrl = process.env.ATLAS_URI;
  const actualUrl = mongooseUrl.replace("<password>", process.env.ATLAS_PW);
  return actualUrl;
};

const initDb = async () => {
  try {
    const mongooseURI = initMongooseDetails();
    await mongoose.connect(mongooseURI);
    console.log("Mongo DB Connected ");
    initServer();
  } catch (err) {
    console.log("DB connection Failed", err);
  }
};

// initialize db connection
initDb();
