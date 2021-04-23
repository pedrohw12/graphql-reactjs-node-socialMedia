const { model, Schema } = require("mongoose");

// Como estamos usando graphql, iremos especificar que
// os campos são 'required', pelo graphql e não aqui
// O createdAt pode ter um valor default já, mas iremos colocar isso
// através dos resolvers do graphql

const postSchema = new Schema({
  body: String,
  username: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String,
    },
  ],
  likes: [
    {
      username: String,
      createdAt: String,
    },
  ],
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = model("Post", postSchema);
