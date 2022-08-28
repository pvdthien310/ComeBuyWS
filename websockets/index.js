const { Server} = require('socket.io');

const WS = (expressServer) => {
    const ws = new Server(expressServer);

    ws.on('connection', (socket) => {
        ws.emit('new-message', {user: 'Thien'})
    })
    return ws
}


module.exports = WS;