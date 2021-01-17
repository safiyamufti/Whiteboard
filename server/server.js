// writing our node JS code here
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


// create the websocket server
// so whenever the user is connected to the websocket server, 'User Online'  msg will be shown in console
// if the server receives any data with the name canvas-data , the msg will be broadcast to all other users

io.on('connection', (socket)=> {
    console.log('User Online');
    socket.on('canvas-data', (data)=> {
        socket.broadcast.emit('canvas-data', data);

    })
})

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;

http.listen(server_port, () => {
    console.log("Started on " + server_port); // added a log to understand that the server is running
})
