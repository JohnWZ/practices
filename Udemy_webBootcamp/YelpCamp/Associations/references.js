var mongoose = require("mongoose");
// // connect to the blog_demo database
mongoose.connect("mongodb://localhost/blog_demo_2", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

var Post = require("./models/post");
var User = require("./models/user");



// create a new post, find the user and push the post to that user's posts
Post.create({
    title: "how to make it Pt.4",
    content: "four, four, four"
}, function(err, post){
    if (err) {
        console.log(err);
    } else {
        User.findOne({email: "john@123.com"}, function(err, foundUser){
            if (err) {
                console.log(err);
            } else {
                foundUser.posts.push(post);
                // save the user to the database
                foundUser.save(function(err, data){
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(data);
                    }
                });
            }
        })
    }
});

// User.create({
//     email: "john@123.com",
//     name: "john"
// }, function(err, user){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// find a user and find all the posts for that user 
// fill in the postId array will all the post data by populate(填充).exec()
// User.findOne({email:"john@123.com"}).populate("posts").exec(function(err, user) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });