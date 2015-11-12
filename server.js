var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

//Creating namespaces for end users ordering to different locations
var shady = io.of('/shady');
var sewickley = io.of('/sewickley');

//Creating namespaces for restaurent applications
var shady_restaurent = io.of('/shady_restaurent');
var sewickley_restaurent = io.of('/sewickley_restaurent');

server.listen(5656);

//Root communicator
io.on('connection', function (socket) {
  socket.emit('hello', 'from root namespace');
  socket.on('hello', function (data) {
    console.log(data);
  });
});

//Shadyside end user communicator
shady.on('connection', function (socket) {
  socket.emit('hello', 'from shadyside namespace');
  socket.on('hello', function (data) {
    console.log(data);
  });


});

//sewickley end user communicator
sewickley.on('connection', function (socket) {
  socket.emit('hello', 'from sewickley namespace');
  socket.on('hello', function (data) {
    console.log(data);
  });

  //on recieving data on 'time', all sockets are broadcasted with recieved data with signal 'hello'
  socket.on('time', function (data) {
    console.log("Forwarded from server to listners");
    socket.broadcast.emit('hello',data);
  });
});


//Shadyside restaurent worker communicator
shady_restaurent.on('connection', function (socket) {
  socket.emit('hello', 'from sewickley namespace');
  socket.on('hello', function (data) {
    console.log(data);
  });
});


//sewickley restaurent worker communicator
sewickley_restaurent.on('connection', function (socket) {
  socket.emit('hello', 'from sewickley namespace');
  socket.on('hello', function (data) {
    console.log(data);
  });
});
