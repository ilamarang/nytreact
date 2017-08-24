// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Article = require("./models/Article.js");



// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;


if (process.env.NODE_ENV === 'production') {
var MONGODB = "mongodb://heroku_76l9r11f:kio2gu6in6vi2l0san2ck8ib02@ds159180.mlab.com:59180/heroku_76l9r11f";
}
else {
var MONGODB = "mongodb://localhost/hwNYTScrape";
}

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect(MONGODB);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api/getSavedArticles", function(req, res) {
console.log('Get All Saved Articles!')
  Article.find({})
    .exec(function(err,doc) {
    console.log(doc);
    res.json(doc);

  })

});

// This is the route we will send POST requests to save each search.
app.post("/api/saveArticle", function(req, res) {
console.log(req.body);
var article = {

  title: req.body.title,
  date: req.body.date,
  url: req.body.url

}


var entry = new Article(article);

// Now, save that entry to the db
entry.save(function(err, doc) {
  // Log any errors
  if (err) {
    console.log(err);
  }
  // Or log the doc
  else {
      res.json(doc);
  }
});

});

//Delete an article
// This is the route we will send POST requests to save each search.
app.post("/api/deleteArticle", function(req, res) {
console.log(req.body);
Article.remove({ _id: req.body._id }, function(err) {
    if (!err) {
            res.json({});

    }
    else {
          console.log('Exception during Delete')
    }
});

});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
