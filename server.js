var path = require('path'),
   express = require('express'),
   app = express();

app.use('/', express.static(__dirname + '/'));

app.listen(3000,function() {
   console.log('listening');
});
