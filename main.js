var express = require('express');
var request = require('request');

var app = express();

app.use(express.static('public'));

app.get('/callback', function (req, res) {
  var code = req.query.code;
  var accessToken;
  request.get(
    'https://github.com/login/oauth/access_token', 
    {
      code: code,
      client_id: process.env.CLIENT_ID,
      client_secrent: process.env.CLIENT_SECRET
    },
    function (result) {
      accessToken = result.access_token;
      res.send(accessToken);
    }
  );
});

app.listen(process.env.PORT || 3000);
