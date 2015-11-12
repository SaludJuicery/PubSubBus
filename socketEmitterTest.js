  var socket = require('socket.io-client')('http://localhost:5656/sewickley');
  socket.on('connect', function(){
  	socket.emit("time", new Date());
  	console.log("Sent data");
  	socket.disconnect();
  });

  //No need of this part
  socket.on('disconnect', function(){
  	console.log("Bye!");
  });


