const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    username: { type: String },
    email: { type: String },
    passwordHash: { type: String },
    isEnabled: { type: Boolean, default: true },
  },
  { collection: "User", strict: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = { UserSchema, User };
