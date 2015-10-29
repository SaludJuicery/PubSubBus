  var socket = require('socket.io-client')('http://localhost:5656');
  socket.on('connect', function(){
  	socket.emit("hello","client: connection succesful");
  });
  socket.on('hello', function(data){
  	console.log("recieved "+data);
  });
  socket.on('disconnect', function(){
  	socket.emit("hello","client: connection closed");
  });
