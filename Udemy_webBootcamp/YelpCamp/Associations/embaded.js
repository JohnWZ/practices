var mongoose = require("mongoose");
// // connect to the blog_demo database
mongoose.connect("mongodb://localhost/blog_demo", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// POST - title, content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// Test User: create a new user and save to the database
// var newUser = new User ({
//     email: "pual@123.com",
//     name: "pual"
// });

// newUser.posts.push({
//     title:"This is a embaded relationship.",
//     content: "Life is hard, isn't it"
// });

// newUser.save(function(err, result){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });


// Test Post:
// var newPost = new Post({
//     title: "How are you today?",
//     content: "Are you doing alright?"
// });
// newPost.save(function(err, result){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// retrive all users

User.findOne({name: "pual"}, function(err, user){
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "I really hate it sometimes.",
            content: "Is there any way to get out of this?"
        });
        user.save(function(err, user){
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});