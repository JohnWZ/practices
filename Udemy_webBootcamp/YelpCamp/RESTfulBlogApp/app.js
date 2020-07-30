// body-parser can get info from req body which gets info from form that we sunmitted

var bodyParser = require ('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

// app config 
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

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

// NEW route
app.get('/blogs/new', function(req, res){
    res.render("new");
});

// CREATE route


app.listen("3000", function(){
    console.log("Servring on port 3000");
});


