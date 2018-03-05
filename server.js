const express = require('express')
const app = express()
const path = require('path')
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('send_msg', info => {
        io.emit('updateMessages', info)
    })
})


// Serve static assets
app.use(express.static(path.resolve(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

server.listen(3000, () => {
    console.log('Listening on port: 3000')
})
