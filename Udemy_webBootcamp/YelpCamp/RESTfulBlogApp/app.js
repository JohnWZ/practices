// body-parser can get info from req body which gets info from form that we sunmitted

var bodyParser = require ('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    expressSanitizer = require('express-sanitizer'),
    express = require('express'),
    app = express();

// app config 
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
// expressSanitizer should go after bodyParser
app.use(expressSanitizer());

// connect to the database (create one if doesn't exit)
mongoose.connect("mongodb://localhost/restful_blog_app", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// mongoose/model model config: create the Schema for the data
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
    body: String,
    // the time when the blog created
	created: {type: Date, default: Date.now}
});
// compile it to model
var Blog = mongoose.model("Blog", blogSchema);

// create a Blog to test if it works
// Blog.create({
//     title: "Test Blog",
//     image: "https://pixabay.com/get/57e7d7424353a914f1dc84609620367d1c3ed9e04e507440732f7ad69045c7_340.jpg",
//     body: "This is a blog post"
// });

// Restful routes
app.get('/', function(req, res){
    res.redirect("blogs");
});

// INDEX route
app.get('/blogs', function(req, res){
    // retrive all blogs in the database
    // results is the data coming back from the database
    Blog.find({}, function(err, results){
        if(err) {
            console.log(err);
        } else {
            // pass results to index under the name blogs
            res.render('index', {blogs: results});
        }
    });
});

// NEW route: show new blog form
app.get('/blogs/new', function(req, res){
    res.render("new");
});

// CREATE route: create a new blog, then redirect somewhere
app.post('/blogs', function(req, res){
    // sanitize user input
    // console.log(req.body); // before sanitize
    req.body.blog.body = req.sanitize(req.body.blog.body);
    // console.log(req.body); // after sanitize
    // create a new blog
    Blog.create(req.body.blog, function(err, newBlog){
        if (err) {
            console.log(err);
            res.render('new');
        } else {
            // redirect to index
            res.redirect('/blogs');
        }
    });
});

// SHOW route: show info about one specific blog
app.get('/blogs/:id', function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err) {
            console.log(err);
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT route: show edit from for one blog
app.get('/blogs/:id/edit', function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if (err) {
            console.log(err);
        } else {
            res.render("edit", {blog: foundBlog});
        }
    })
});

// UPDATE route: update particular dog, then redirect somewhere
// Update和Show使用同一个URL，查看某个具体的blog的同时也可以修改它
app.put('/blogs/:id', function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/blogs/" + req.params.id);
        }
    });
});

// DELETE route: delete a particular dog, then redirect somewhere
app.delete('/blogs/:id', function(req, res){
    // destroy blog
    // there is no returned blog in the params of the call back function
    Blog.findByIdAndRemove(req.params.id, function(err){
        if (err) {
            console.log(err);
        } else {
            // redirect
            res.redirect("/blogs");
        }
    });
});

app.listen("3000", function(){
    console.log("Servring on port 3000");
});


