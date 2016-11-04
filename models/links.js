var mongoose = require('mongoose');

var linkSchema = mongoose.Schema({
  Success: [],
  Skipped: [],
  Error: []
});

var Link = mongoose.model('Link', linkSchema);

module.exports = Link;
