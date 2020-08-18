// this file is just for demonstrate how does mongoose work

const mongoose = require('mongoose');
// connect to our database
// cat_app is the name of database, it will search for it first, if it doesn't exit, it will create one, and then connect it
mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

// define a pattern for our data
// tell the javascript side that I want to be able to add a cat to our database, and the cat should be defined as this
var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

// compile catSchema into a model, and store it in Cat
// now Cat is not just a model, but it also has all those methods with it
// so that we can do CRUD(增删查改) with Cat
var Cat = mongoose.model("Cat", catSchema);

 
// // add a new cat to the database
// var george = new Cat({
// 	name: "George",
// 	age: 11,
// 	temperament: "Grouchy"
// });

// // ** notice that each time when the code is running, it will store the data to the database again
// // It will not be stored in the database unless save it
// // george.save();
// // give it a function to make sure we successfully saved it
// george.save(function(err, cat){
// 	if(err){
// 		console.log("SOMETHING WENT WRONG!");
// 	} else {
//         console.log("WE JUST SAVED A CAT TO THE DB");
//         // note that cat is different from george, 
//         // george is what we want to save to the database, and "george" is a variable name from JS side, it can be called anything, will not effect the data stored into the database
//         // cat is what sent back from database
// 		console.log(cat);
// 	}
// });

// another way to create a cat
Cat.create({
    name: "Snow White",
    age: 15,
    temperament: "Bland"
}, function(err, cat){
    if(err) {
        console.log(err);
    } else {
        console.log(cat);
    }
});

// retrieve all cats from the database and console.log each one
// find empty obj, because we are not looking for any particular cat, we want all of them
Cat.find({}, function(err, results){
	if(err){
		console.log("HO NO, ERROR!");
		console.log(err);
	} else {
		console.log("All the cats:");
		console.log(results);
	}
});

