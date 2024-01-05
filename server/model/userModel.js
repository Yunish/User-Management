const { default: mongoose } = require("mongoose");

const userCreateSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, minLength: 3, maxLength: 10 },
    middleName: { type: String },
    lastName: { type: String, required: true, minLength: 3, maxLength: 10 },
    dateOfBirth: { type: String, required: true, minLength: 3, maxLength: 10 },
    contactNumber: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 12,
    },
    address: { type: String, required: true, minLength: 5, maxLength: 100 },
    username: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
      unique: true,
    },
    email: { type: String, required: true, unique: true },
    userType: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hashedPassword: { type: String, required: true },
    firstLogin: { type: Boolean },
    forgotPassword: { type: String },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userCreateSchema);

module.exports = userModel;
