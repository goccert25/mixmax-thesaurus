var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');

// The API that returns the in-email representation.
module.exports = function(req, res) {
  var term = req.query.text.trim();
  // term = '<p style="display:inline">' + term + '</p>';
  res.json({
    body: term,
    raw: true
  });
};
