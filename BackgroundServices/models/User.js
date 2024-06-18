const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    fullname: { type: String, require: true },
    email: { type: String, require: true },
    age: { type: Number },
    country: { type: String, require: true },
    address: { type: String, require: true },
    password: { type: String, require: true },
    status: { type: Number, default: 0 },
    role: { type: String, default: "user" },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
