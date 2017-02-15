var key = require('../utils/key');
var request = require('request');
var _ = require('underscore');

// The Type Ahead API.
module.exports = function(req, res) {
  var term = req.query.text.trim();
  if (!term) {
    res.json([{
      title: '<i>(enter a search term)</i>',
      text: ''
    }]);
    return;
  }
  request('http://words.bighugelabs.com/api/2/' + key + '/'+term +'/json',
  function(err, response) {
    if (err || response.statusCode !== 200 || !response.body) {
      console.log("Status Code: " + response.statusCode);
      console.log("Error: " + err);
      res.status(500).send('Error');
      return;
    }
    results = [];
    var relation = 'syn';
    words = JSON.parse(response.body);
    for (var type in words) {
      if (words.hasOwnProperty(type)) {
        if(words[type].hasOwnProperty(relation)){
          let len = words[type][relation].length;
          if (len > 15) len = 15;
          for (let i = 0; i < len; i++){
              results.push({
                title:'<b>'+words[type][relation][i]+'</b> - <i>' + type + '</i>',
                text: words[type][relation][i]
              });
          }
        }
      }
    }
    if (results.length === 0) {
      res.json([{
        title: '<i>(no results)</i>',
        text: ''
      }]);
    } else {
      res.json(results);
    }
  });

};
