const express = require('express');
const app = express();

const port = 3000;
const http = require('http').Server(app);
app.get('/', function(request, response){
    return response.sendFile(__dirname + '/index.html');
})

app.use(express.static(__dirname+'/public'))


http.listen(3000, function(){
    console.log(`running on port ${port}`);
})

const io = require('socket.io')(http);

io.on('connection', (socket)=>{
    console.log('connected');
    socket.on('connection2',(name)=>{
        socket.broadcast.emit('connection2', name);
    })
    socket.on('message', (msg)=>{
        socket.broadcast.emit('message', msg);
    })
})