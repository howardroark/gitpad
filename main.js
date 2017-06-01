var express = require('express');
var request = require('request-promise');

var app = express();

app.use(express.static('public'));

app.get('/callback', function (req, res) {
  var options = {
    method: 'GET',
    uri: 'https://github.com/login/oauth/access_token',
    qs: {
      code: req.query.code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET
    }
  };
  request(options)
    .then(function (response) {
      res.redirect('/?' + response);
    })
    .catch(function (err) {
      console.log(err);
      res.sendStatus(500);
    });
});

app.listen(process.env.PORT || 3000);
