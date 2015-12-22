var path = require('path'),
   express = require('express'),
   app = express();
   // playerCrudService = require('./server/modules/player/player.crud.service.js');

app.use('/', express.static(__dirname + '/'));

// app.post('/#', function(req, res) {
//    res.send(playerCrudService.addPlayer);
// });

app.listen(3000,function() {
   console.log('listening');
   // console.log(typeof playerCrudService.getPlayerList);
});
