var express = require('express');
var app = express();
app.listen(9000);

var tweets = [];

app.get('/', function(req, res){
  res.send('Welcome to Node Twitter');
});

app.post('/send', express.bodyParser(), function(req, res){
  if (req.body && req.body.tweet) {
    tweets.push(req.body.tweet);
    res.send({status: "ok", message: "Twee received"});
  } else {
    res.send({status: "nok", message: "No tweet."});
  }
});

app.get('/tweets', function(req, res){
  res.send(tweets);
});