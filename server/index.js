var express = require('express'),
    app = express(),
    path = require('path');

require('node-jsx').install({ extension: '.jsx' });

app.set('views', 'server/views/');
app.set('view engine', 'jade');

app.use('/public/js', express.static(path.join(__dirname, '../build/js')));

app.use('/', function(req, res) {
  // Make stuff iso here!
  res.render('index', { app: 'Hello World' });
});

// 1912 the year Endurance left port for Antarctica (and subsequently sank)
var port = process.env.PORT || 1912;

app.listen(port, function() {
  console.log('listening on *:' + port);
});
