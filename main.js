var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/callback', function (req, res) {
  res.send(req.params);
});

app.listen(process.env.PORT || 3000);
