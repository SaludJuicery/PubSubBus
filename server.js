var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Creating namespaces for different 
var shady = io.of('/shady');
var swekly = io.of('/swekly');

server.listen(5656);


io.on('connection', function (socket) {
  socket.emit('hello', 'from root namespace');
  socket.on('hello', function (data) {
    console.log(data);
  });
});


shady.on('connection', function (socket) {
  socket.emit('hello', 'from shadyside namespace');
  socket.on('hello', function (data) {
    console.log(data);
  });
});


swekly.on('connection', function (socket) {
  socket.emit('hello', 'from shadyside namespace');
  socket.on('hello', function (data) {
    console.log(data);
  });
});
