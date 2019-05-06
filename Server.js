var express = require('express')

function player(id,x,y)
{
    this.id = id
    this.x = x
    this.y = y

}
var app = require('express')();
app.use(express.static('public'))
var server = require('http').Server(app);
var pList = []

var socket = require('socket.io')
var io = require('socket.io').listen(server);
server.listen(5000);

setInterval(updateList, 1000);

function updateList(){
   io.sockets.emit('updateList', pList)

}

io.sockets.on('connection', function(socket){
    console.log('a user connected:', socket.id);
    socket.on('start',  function (data) {
        console.log(socket.id+" " + data.x+ " " + data.y)
        pList.push(new player(socket.id, data.x, data.y))

    });
    socket.on('update',  function (data) {
        var current = {};
        for(var i = 0; i < pList.length; i++)
        {
            if(pList[i]===socket.id){
                current = pList[i]
            }
            current.x = data.x
            current.y = data.y
        }
    });

    socket.on('disconnect', function() {
        console.log('user disconnected');
    });
});
