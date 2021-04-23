const { model, Schema } = require("mongoose");

// Como estamos usando graphql, iremos especificar que
// os campos são 'required', pelo graphql e não aqui

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  createdAt: String,
});

module.exports = model("User", userSchema);
