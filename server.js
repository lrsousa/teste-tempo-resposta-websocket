var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(8080);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });


  socket.on('message', function(data) {
  	console.log(data);
  	socket.emit('resposta', data);
  });
});