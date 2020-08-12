var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// connect to the yelp_camp database
mongoose.connect("mongodb://localhost:27017/yelp_camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// SCHEMA setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
    // 改动SCHEMA里的东西后，要把数据库里的所有数据全部drop掉，再添加才有效。否则添加的数据一直遵循旧数据的格式
    // mongo
    // show dbs
    // use yelp_camp
    // show collections
    // db.campgrounds.find()    // 查看当前的数据库，可以看到改动SCHEMA之后drop数据之前添加的数据全都是旧格式
    // db.campgrounds.drop()
});
// compile it to a model
var Campground = mongoose.model("Campground", campgroundSchema);


app.get("/", function(req, res){
    res.render("landing");
});

// INDEX - Display a list of all campgrounds
app.get("/campgrounds", function(req, res){
    // get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds){
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
});

// CREATE - add new campground to DB
app.post("/campgrounds", function(req, res){
    // res.send("You hit the post request!"); // test
    // get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    // console.log(name);
    // console.log(desc);
    // create a new object and create a new data
    var newCampground = {name: name, image: image, description: desc};

    // create a new campground and save to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if (err) {
            console.log(err);
        } else {
            // redirect to campgrounds page
            res.redirect("/campgrounds");
        }
    });
});

// NEW - Displays form to make a new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

// SHOW - shows more info about one cmapground
app.get("/campgrounds/:id", function(req, res) {
    // find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            // render some tamplate with that campground
            res.render("show", {campground: foundCampground});
        }
    });
});

app.listen("3000", function(){
    console.log("The YelpCamp server is listening on port 3000");
});