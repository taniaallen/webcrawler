var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var mongoose = require('mongoose');

/*  app settings  */
var app = express();
var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/webcrawler';

/* db */


/*  Server  */
mongoose.connect(mongoDBURI);
mongoose.connection.once('open', function() {
  console.log('the mongod connection is open');
});

app.listen(port, function() {
  console.log('server running on port ' + port);
});
