var mongoose = require("mongoose");

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

// The export is just like a return in a function
module.exports = Post;