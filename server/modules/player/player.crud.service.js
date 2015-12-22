// var express = require('express'),
//    router = express.Router();

module.exports = {
   addPlayer: function() {
      router.post('/players', function(req, res) {
         res.send('Added Bob Dole');
      });
   },
   getPlayerList: function() {
      router.get('/players', function(req, res) {
         var db = req.db;
         var collection = db.get('players');
         collection.find({}, {}, function(e, docs) {
            res.json(docs);
         });
      });
   }
};
