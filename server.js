var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
const url = require('url');
var ObjectID = mongodb.ObjectID;

var CONTACTS_COLLECTION = "contacts";
process.env.HTTPS = 'true';
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 5000;
const uri = "mongodb+srv://qloak:bigqloakideas@cluster0-lbws3.azure.mongodb.net/test?retryWrites=true&w=majority";

var app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());

//https://daveceddia.com/deploy-react-express-app-heroku/
//https://www.sitepoint.com/deploy-rest-api-in-30-mins-mlab-heroku/

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.

mongodb.MongoClient.connect(uri, function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database.db(CONTACTS_COLLECTION);
  console.log("Database connection ready");
  //console.log(db);

  // Initialize the app.

  // var mongoServer = app.listen(port, (err) => {
  //   if (err) throw err;
  //   console.log(`Listening on http://localhost:${port}`);
  //   var serverPort = mongoServer.address().port;
  //   console.log("App now running on port", serverPort);
  // });


});

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*
app.get("/contacts", function(req, res) {

  db.collection(CONTACTS_COLLECTION).find({}).toArray(function(err, docs) {
    if (err) {
      handleError(res, err.message, "Failed to get contacts.");
    } else {
      res.status(200).json(docs);
    }
  });

  console.log(db)

  // return res.status(200).send({
  //   success: 'contacts',/
  //   message: 'witches retrieved successfully',
  //   witches: data
  // })

});
*/

app.post("/contacts", function(req, res) {
  var newContact = req.body;

  if (!(req.body.email)) {
    handleError(res, "Invalid user input", "Must provide an email.", 400);
  }

  db.collection(CONTACTS_COLLECTION).insertOne(newContact, function(err, doc) {
    if (err) {
      handleError(res, err.message, "Failed to create new contact.");
    } else {
      res.status(201).json(doc.ops[0]);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/build/index.html'));
});

var server = app.listen(port);
var serverPort = server.address().port;
console.log("App now running on port", serverPort);

// CONTACTS API ROUTES BELOW
