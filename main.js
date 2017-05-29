var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/callback', function (req, res) {
  var code = req.query.code;
  res.send(code);
});

app.listen(process.env.PORT || 3000);
