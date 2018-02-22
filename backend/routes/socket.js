var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(__dirname + '/index.html');
});



module.exports = router;





/*
var app = require('express');
var router = express.Router();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.get('/socket', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
});

http.listen(5000, function(){
    console.log('listening on *:3000');
});*/
